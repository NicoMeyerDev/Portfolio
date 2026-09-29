---
id: quizzly
title: Quizzly
sidebar_position: 8
---

# Quizzly

## Description

Quizzly is an AI-powered backend that transforms YouTube videos into interactive quizzes. Simply provide a YouTube URL, and the app will automatically generate a 10-question quiz based on the video content: perfect for learning, reviewing, or just having fun.

## Prerequisites

Make sure the following software is installed on your system:

- Python 3.12
- Git

## Quickstart

### Clone the repository

```bash
git clone https://github.com/NicoMeyerDev/Quizzly-backend
```

### Navigate to the project

```bash
cd quizzly-backend
```

### Create and activate a virtual environment

A virtual environment ensures that the installed packages are only used for this project.

```bash
python -m venv env
```

Activate it:

- on Windows run: `.\env\Scripts\Activate.ps1`
- on macOS/Linux run: `source env/bin/activate`

:::note
You will know it worked when `(env)` appears at the beginning of your command line.
:::

### Install the dependencies

```bash
pip install -r requirements.txt
```

### Configure the application

Create a `.env` file in the root directory and add your Gemini API key:

```bash
GEMINI_API_KEY=your-api-key-here
```

### Set up the database

```bash
python manage.py migrate
```

### Start the application

```bash
python manage.py runserver
```

### Open the application

`http://127.0.0.1:8000/`

## Usage

### Configuration

The AI features use the Google Gemini API. The key is read from the `GEMINI_API_KEY` variable in the `.env` file. You can get a free API key at [Google AI Studio](https://aistudio.google.com).

### Database

The migration files are already included in the project, so running `makemigrations` is not necessary. `python manage.py migrate` is enough.

### Related repositories

| Repository   | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| **Frontend** | [quizzly-frontend](https://github.com/NicoMeyerDev/quizzly-frontend) |
| **Backend**  | [quizzly-backend](https://github.com/NicoMeyerDev/quizzly-backend)   |

**Tech:** Python, Django, Django REST Framework, JWT, Google Gemini (LLM)

<!-- TODO: add architecture details and screenshots -->
