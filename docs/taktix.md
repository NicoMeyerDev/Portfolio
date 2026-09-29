---
id: taktix
title: Taktix
sidebar_position: 1
---

# Taktix

## Description

Taktix is a tablet-optimized coaching app for football coaches, built for use right at the touchline. It supports amateur coaches with match preparation, line-up planning and matchday control. The core of the app is the live matchday module with substitution briefings, a match timer and real-time match control.

In the long run the app is meant to grow into a complete platform for club management, training, tactics and analysis.

Live demo: [matchday-app-lqai.onrender.com](https://matchday-app-lqai.onrender.com)

## Features

### Currently available

- **Authentication:** Registration, login and logout with JWT, plus an onboarding flow for creating the club
- **Squad:** Player management with shirt number, position, squad status and attributes (technical / mental / physical, goalkeeper-specific overrides)
- **Preparation:** Line-up planning with formation, starting eleven and bench plus player instructions; injured and suspended players are hidden
- **Matchday:** Live matchday view with a timestamp-based 45-minute timer (robust against tablet lock), substitutions, substitution briefing, goal events and cards; events are saved continuously (crash protection)
- **Post-match:** Automatic report generation with the result calculated from the events, notes and player analysis
- **Training hub:** Training planning with automatically generated blocks (activation / small-sided game 1 / intermediate block / small-sided game 2)

### Planned

- Role and permission system (coach and player accounts)
- Multi-club support (multi-tenant architecture)
- AI-based match analysis
- Tactics board with drawing function

## Screenshots

### Dashboard

![Dashboard](@site/static/img/projects/taktix/dashboard.png)

### Squad

![Squad](@site/static/img/projects/taktix/kader.png)

### Player detail

![Player detail](@site/static/img/projects/taktix/spielerdetail.png)

### Preparation

![Preparation](@site/static/img/projects/taktix/vorbereitung.png)

### Preparation: player instructions

![Preparation: player instructions](@site/static/img/projects/taktix/vorbereitung-2.png)

### Matchday

![Matchday](@site/static/img/projects/taktix/matchday.png)

### Substitution briefing

![Substitution briefing](@site/static/img/projects/taktix/briefing.png)

### Post-match report

![Post-match report](@site/static/img/projects/taktix/postmatch.png)

### Training hub

![Training hub](@site/static/img/projects/taktix/trainingshub.png)

### Exercise database

![Exercise database](@site/static/img/projects/taktix/uebungsdatenbank.png)

## Prerequisites

Make sure the following software is installed on your system:

- Docker (recommended), or alternatively:
- Python 3.12 or newer and Node.js 22 or newer

## Quickstart

### Clone the repository

```bash
git clone https://github.com/NicoMeyerDev/matchday-app
```

### Start with Docker

Create a `.env` file in the root directory and fill in your values, for example:

```bash
POSTGRES_DB=matchday
POSTGRES_USER=matchday_user
POSTGRES_PASSWORD=your-password

SECRET_KEY=your-secret-key
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

DJANGO_SUPERUSER_USERNAME=admin
DJANGO_SUPERUSER_EMAIL=admin@example.com
DJANGO_SUPERUSER_PASSWORD=your-admin-password

FRONTEND_URL=http://localhost:8080
DEBUG=False
```

Then start all containers:

```bash
docker compose up --build -d
```

Docker Compose starts three services:

- **db:** PostgreSQL with a named volume (`postgres_data`), so the data survives restarts
- **backend:** Django REST Framework with gunicorn, at `http://localhost:8000/api/`. The entrypoint script applies the migrations on start and creates the superuser. The container runs as a non-root user.
- **frontend:** the React frontend behind nginx, at `http://localhost:8080`

:::note
Use your own secret values in the `.env` file and do not commit the file to the repository.
:::

### Alternatively: start without Docker

#### Backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

- on Windows run: `venv\Scripts\activate`
- on Linux/macOS run: `source venv/bin/activate`

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The backend runs at `http://localhost:8000/api/`.

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`.

## Usage

### API endpoints

| Endpoint | Methods | Description |
|---|---|---|
| `/api/auth/register/` | POST | Registration |
| `/api/auth/login/` | POST | Login |
| `/api/auth/logout/` | POST | Logout |
| `/api/players/` | GET, POST, PATCH, DELETE | Player management |
| `/api/formations/` | GET | Formations (read-only) |
| `/api/lineups/` | GET, POST, PATCH | Line-ups |
| `/api/matchreports/` | GET, POST, PATCH | Match reports |
| `/api/matchevents/` | GET, POST, DELETE | Match events |
| `/api/clubs/` | GET, POST | Club data |
| `/api/training/` | GET, POST, PATCH, DELETE | Training sessions |

### Data models

- **Player:** Player with name, shirt number, positions and 12 attributes in 3 categories (technical / mental / physical), plus goalkeeper-specific overrides (goal kick, reflexes)
- **Formation / FormationPosition:** Formation (e.g. 4-3-3) with individual positions including x/y coordinates for the pitch
- **Lineup / LineupSlot / LineupSubstitute:** Concrete line-up for a match with starting positions and substitutes on the bench
- **MatchReport / MatchEvent:** Match report with a result calculated automatically from the events (goals, cards, substitutions); events are saved continuously
- **Training / TrainingsBlock:** Training session with classic blocks generated automatically on creation
- **Club:** Club data with an invitation function (invitation link for players and coaches)

### Project structure

```
matchday_mvp/
├── backend/
│   ├── core/               # Settings, URLs
│   ├── auth_app/           # Registration and login
│   ├── players/            # Player management and attributes
│   ├── formations/         # Formations and positions (read-only)
│   ├── lineups/            # Line-ups and bench
│   ├── matchreport/        # Match reports and events
│   ├── training/           # Training hub and blocks
│   ├── clubs/              # Club management and invitation function
│   ├── manage.py
│   └── requirements.txt
│
└── frontend/
    └── src/
        ├── api/            # Axios requests and auto-refresh on 401
        ├── components/     # Reusable UI components
        ├── pages/          # Page components
        ├── hooks/          # Custom hooks (e.g. useAutoDismiss)
        └── utils/          # Helper functions
```

### Roadmap

**Phase 1: Demo-ready** (done)

- Authentication and onboarding
- Squad and attributes
- Preparation and line-up
- Matchday with timer and substitution briefing
- Post-match report
- Training hub

**Phase 2: First half of the season**

- Exercise database in the training hub
- Tactics hub (animated tactics board, runs, SVG drawing area)

**Phase 3: Second half of the season**

- Player and coach accounts with a role system
- LLM-based match analysis (text summaries from match data)
- Assign an event to a player (goal or card)

**Long term**

- Multi-tenant architecture (several clubs and teams)
- Club license model
- App store distribution via Capacitor

**Tech:** Python, Django, Django REST Framework, PostgreSQL, JWT (HttpOnly cookies), React, Vite, Docker, Render

<!-- TODO: add architecture details -->
