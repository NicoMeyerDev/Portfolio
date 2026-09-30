---
id: videoflix
title: Videoflix
sidebar_position: 9
---

# Videoflix

## Description

Videoflix is a containerized video streaming backend inspired by modern streaming platforms. Built with Django, Django REST Framework, PostgreSQL, Redis and ffmpeg, it handles user authentication, video uploads, asynchronous processing and automatic HLS conversion for adaptive streaming.

Uploaded videos are automatically converted into multiple resolutions (480p, 720p, 1080p) and prepared for playback in HLS-compatible players.

## Features

- User registration with email activation
- JWT authentication using HttpOnly cookies
- Password reset via email
- Secure login and session handling
- Video upload through the Django admin
- Automatic HLS conversion (480p / 720p / 1080p) using ffmpeg
- Automatic thumbnail generation
- Background processing with Redis and Django RQ
- Dockerized environment for a reproducible setup
- PostgreSQL database integration

## Prerequisites

Make sure the following software is installed on your system:

- Docker
- Git

:::note
Django, PostgreSQL, Redis, ffmpeg and all other dependencies are installed automatically inside the Docker containers.
:::

## Quickstart

### Clone the repository

```bash
git clone https://github.com/NicoMeyerDev/Videoflix
```

### Navigate to the project

```bash
cd Videoflix
```

### Configure the application

Create the environment file from the template:

- on Windows run: `copy .env.template .env`
- on macOS/Linux run: `cp .env.template .env`

Then open `.env` and fill in your values, for example:

```bash
SECRET_KEY=your-secret-key

DB_NAME=videoflix_db
DB_USER=videoflix_user
DB_PASSWORD=your-password

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

EMAIL_USE_TLS=True
DEFAULT_FROM_EMAIL=your@gmail.com

FRONTEND_URL=http://127.0.0.1:5500
```

:::note
Gmail requires an app password, not your normal Gmail password.
:::

### Start the containers

```bash
docker compose up --build -d
```

The entrypoint script automatically waits for PostgreSQL, applies the database migrations, collects the static files and creates a default superuser for local development.

### Open the application

- Backend: `http://localhost:8000/`
- Admin panel: `http://localhost:8000/admin/`

## Usage

### Authentication flow

Registration requires email activation:

Register → activation mail → activate the account → log in

Password reset is supported via email.

### Video processing

1. Upload a video via the Django admin
2. A background task starts automatically
3. ffmpeg converts the video to HLS format
4. The resolutions 480p, 720p and 1080p are generated
5. A thumbnail is generated automatically
6. The stream-ready output is stored for playback

### Troubleshooting on Windows

If the backend container does not start and you see `exec ./backend.entrypoint.sh: no such file or directory`, the file probably uses Windows line endings (`CRLF`) instead of Linux line endings (`LF`).

1. Open `backend.entrypoint.sh` in VS Code
2. Click `CRLF` in the bottom right and change it to `LF`
3. Save the file and rebuild the containers:

```bash
docker compose down
docker compose up --build -d
```

### Related repositories

| Repository   | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| **Frontend** | [Videoflix-Frontend](https://github.com/NicoMeyerDev/Videoflix-Frontend) |
| **Backend**  | [Videoflix](https://github.com/NicoMeyerDev/Videoflix)               |

**Tech:** Python, Django, Django REST Framework, PostgreSQL, Redis, Django RQ, ffmpeg, Docker, JWT

<!-- TODO: add architecture details and screenshots -->
