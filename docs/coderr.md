---
id: coderr
title: Coderr
sidebar_position: 7
---

# Coderr

## Description

Coderr is a RESTful backend API for a freelancer developer platform, built with Django REST Framework.

The backend handles all core functionalities such as user management, project handling, bookings, and communication between clients and developers. It is designed to integrate seamlessly with an existing frontend application.

## Prerequisites

Make sure the following software is installed on your system:

- Python 3.12
- Git

## Quickstart

### Clone the repository

```bash
git clone https://github.com/NicoMeyerDev/coderr-Backend.git
```

### Navigate to the project

```bash
cd coderr-Backend
```

### Create and activate a virtual environment

```bash
python -m venv env
```

Activate it:

- on Windows run: `.\env\Scripts\Activate.ps1`
- on macOS/Linux run: `source env/bin/activate`

### Install the dependencies

```bash
pip install -r requirements.txt
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

The API is then available at `http://127.0.0.1:8000/`.

## Usage

### Related repositories

| Repository   | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| **Frontend** | [Coderr-Frontend](https://github.com/NicoMeyerDev/Coderr-Frontend) |
| **Backend**  | [coderr-Backend](https://github.com/NicoMeyerDev/coderr-Backend) |

The frontend is a simple Vanilla JavaScript application. It needs the running backend to work.

**Tech:** Python, Django, Django REST Framework, PostgreSQL

<!-- TODO: add architecture details and screenshots -->
