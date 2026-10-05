---
id: taktix
title: Taktix
sidebar_position: 1
---

# Taktix

## Beschreibung

Taktix ist eine tablet-optimierte Coaching-App für Fußballtrainer, entwickelt für den Einsatz direkt am Spielfeldrand. Sie unterstützt Trainer im Amateurfußball bei Spielvorbereitung, Aufstellungsplanung und Spieltagssteuerung. Der Kern der App ist das Live-Matchday-Modul mit Wechsel-Briefings, Spielzeit-Timer und Echtzeit-Spielsteuerung.

Langfristig soll die App zu einer Gesamtplattform für Vereinsverwaltung, Training, Taktik und Analyse wachsen.

Live-Demo: [matchday-app-lqai.onrender.com](https://matchday-app-lqai.onrender.com)

## Funktionen

### Aktuell verfügbar

- **Authentifizierung:** Registrierung, Login und Logout mit JWT, dazu ein Onboarding-Flow zum Erstellen des Vereins
- **Kader:** Spielerverwaltung mit Rückennummer, Position, Kaderstatus und Attributen (Technisch / Mental / Physisch, Torwart-spezifische Overrides)
- **Vorbereitung:** Aufstellungsplanung mit Formation, Startelf und Bank sowie Spieleranweisungen; verletzte und gesperrte Spieler werden ausgeblendet
- **Matchday:** Live-Spieltagsansicht mit zeitstempelbasiertem 45-Minuten-Timer (robust gegen Tablet-Sperren), Wechseln, Wechsel-Briefing, Torereignissen und Karten; Ereignisse werden laufend gespeichert (Crash-Schutz)
- **Post-Match:** Automatische Berichterstellung mit Spielergebnis aus den Ereignissen, Notizen und Spieleranalyse
- **Trainingshub:** Trainingsplanung mit automatisch generierten Blöcken (Aktivierung / Spielform 1 / Zwischenblock / Spielform 2)

### Geplant

- Rollen- und Rechtesystem (Trainer- und Spieler-Accounts)
- Mehrvereinsfähigkeit (Multi-Tenant-Architektur)
- KI-basierte Spielanalyse
- Taktikboard mit Zeichenfunktion

## Screenshots

### Dashboard

![Dashboard](@site/static/img/projects/taktix/dashboard.png)

### Kader

![Kader](@site/static/img/projects/taktix/kader.png)

### Spielerdetail

![Spielerdetail](@site/static/img/projects/taktix/spielerdetail.png)

### Vorbereitung

![Vorbereitung](@site/static/img/projects/taktix/vorbereitung.png)

### Vorbereitung: Spieleranweisungen

![Vorbereitung: Spieleranweisungen](@site/static/img/projects/taktix/vorbereitung-2.png)

### Matchday

![Matchday](@site/static/img/projects/taktix/matchday.png)

### Wechsel-Briefing

![Wechsel-Briefing](@site/static/img/projects/taktix/briefing.png)

### Post-Match-Bericht

![Post-Match-Bericht](@site/static/img/projects/taktix/postmatch.png)

### Trainingshub

![Trainingshub](@site/static/img/projects/taktix/trainingshub.png)

### Übungsdatenbank

![Übungsdatenbank](@site/static/img/projects/taktix/uebungsdatenbank.png)

## Voraussetzungen

Stelle sicher, dass auf deinem System folgende Software installiert ist:

- Docker (empfohlen), oder alternativ:
- Python 3.12 oder neuer und Node.js 22 oder neuer

## Schnellstart

### Repository klonen

```bash
git clone https://github.com/NicoMeyerDev/matchday-app
```

### Mit Docker starten

Lege im Hauptordner eine Datei `.env` an und trage deine Werte ein, zum Beispiel:

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

Starte danach alle Container:

```bash
docker compose up --build -d
```

Docker Compose startet drei Services:

- **db:** PostgreSQL mit einem benannten Volume (`postgres_data`), sodass die Daten Neustarts überstehen
- **backend:** Django REST Framework mit gunicorn, unter `http://localhost:8000/api/`. Das Entrypoint-Skript wendet beim Start die Migrationen an und legt den Superuser an. Der Container läuft als Nicht-Root-Benutzer.
- **frontend:** das React-Frontend hinter nginx, unter `http://localhost:8080`

:::note
Verwende in der `.env` eigene, geheime Werte und committe die Datei nicht ins Repository.
:::

### Alternativ: ohne Docker starten

#### Backend

```bash
cd backend
python -m venv venv
```

Aktiviere die virtuelle Umgebung:

- unter Windows: `venv\Scripts\activate`
- unter Linux/macOS: `source venv/bin/activate`

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Das Backend läuft unter `http://localhost:8000/api/`.

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

Das Frontend läuft unter `http://localhost:5173`.

## Nutzung

### API-Endpunkte

| Endpunkt | Methoden | Beschreibung |
|---|---|---|
| `/api/auth/register/` | POST | Registrierung |
| `/api/auth/login/` | POST | Login |
| `/api/auth/logout/` | POST | Logout |
| `/api/players/` | GET, POST, PATCH, DELETE | Spielerverwaltung |
| `/api/formations/` | GET | Formationen (nur lesend) |
| `/api/lineups/` | GET, POST, PATCH | Aufstellungen |
| `/api/matchreports/` | GET, POST, PATCH | Spielberichte |
| `/api/matchevents/` | GET, POST, DELETE | Spielereignisse |
| `/api/clubs/` | GET, POST | Vereinsdaten |
| `/api/training/` | GET, POST, PATCH, DELETE | Trainingseinheiten |

### Datenmodelle

- **Player:** Spieler mit Name, Rückennummer, Positionen und 12 Attributen in 3 Kategorien (Technisch / Mental / Physisch), dazu Torwart-spezifische Overrides (Abschlag, Reflexe)
- **Formation / FormationPosition:** Formation (z. B. 4-3-3) mit einzelnen Positionen inklusive x/y-Koordinaten für das Spielfeld
- **Lineup / LineupSlot / LineupSubstitute:** Konkrete Aufstellung für ein Spiel mit Startelf-Positionen und Ersatzspielern auf der Bank
- **MatchReport / MatchEvent:** Spielbericht mit automatisch berechnetem Ergebnis aus den Ereignissen (Tore, Karten, Wechsel); Ereignisse werden laufend gespeichert
- **Training / TrainingsBlock:** Trainingseinheit mit automatisch generierten klassischen Blöcken bei der Erstellung
- **Club:** Vereinsdaten mit Einladungsfunktion (Einladungslink für Spieler und Trainer)

### Projektstruktur

```
matchday_mvp/
├── backend/
│   ├── core/               # Einstellungen, URLs
│   ├── auth_app/           # Registrierung und Login
│   ├── players/            # Spielerverwaltung und Attribute
│   ├── formations/         # Formationen und Positionen (nur lesend)
│   ├── lineups/            # Aufstellungen und Bank
│   ├── matchreport/        # Spielberichte und Ereignisse
│   ├── training/           # Trainingshub und Blöcke
│   ├── clubs/              # Vereinsverwaltung und Einladungsfunktion
│   ├── manage.py
│   └── requirements.txt
│
└── frontend/
    └── src/
        ├── api/            # Axios-Requests und Auto-Refresh bei 401
        ├── components/     # Wiederverwendbare UI-Komponenten
        ├── pages/          # Seitenkomponenten
        ├── hooks/          # Custom Hooks (z. B. useAutoDismiss)
        └── utils/          # Hilfsfunktionen
```

### Roadmap

**Phase 1: Demo-Ready** (erledigt)

- Authentifizierung und Onboarding
- Kader und Attribute
- Vorbereitung und Aufstellung
- Matchday mit Timer und Wechsel-Briefing
- Post-Match-Bericht
- Trainingshub

**Phase 2: Hinrunde**

- Übungsdatenbank im Trainingshub
- Taktikhub (animiertes Taktikboard, Laufwege, SVG-Zeichenfläche)

**Phase 3: Rückrunde**

- Spieler- und Trainer-Accounts mit Rollensystem
- LLM-basierte Spielanalyse (Textzusammenfassungen aus Spieldaten)
- Ereignis einem Spieler zuordnen (Tor oder Karte)

**Langfristig**

- Multi-Tenant-Architektur (mehrere Vereine und Teams)
- Vereinslizenz-Modell
- App-Store-Distribution über Capacitor

**Technik:** Python, Django, Django REST Framework, PostgreSQL, JWT (HttpOnly-Cookies), React, Vite, Docker, Render

<!-- TODO: add architecture details -->
