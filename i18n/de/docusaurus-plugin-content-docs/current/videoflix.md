---
id: videoflix
title: Videoflix
sidebar_position: 9
---

# Videoflix

## Beschreibung

Videoflix ist ein containerisiertes Video-Streaming-Backend nach dem Vorbild moderner Streaming-Plattformen. Es ist mit Django, Django REST Framework, PostgreSQL, Redis und ffmpeg gebaut und übernimmt Benutzer-Authentifizierung, Video-Uploads, asynchrone Verarbeitung und die automatische HLS-Umwandlung für adaptives Streaming.

Hochgeladene Videos werden automatisch in mehrere Auflösungen (480p, 720p, 1080p) umgewandelt und für die Wiedergabe in HLS-fähigen Playern vorbereitet.

## Funktionen

- Benutzerregistrierung mit E-Mail-Aktivierung
- JWT-Authentifizierung über HttpOnly-Cookies
- Passwort-Zurücksetzen per E-Mail
- Sicherer Login und Sitzungsverwaltung
- Video-Upload über das Django-Admin
- Automatische HLS-Umwandlung (480p / 720p / 1080p) mit ffmpeg
- Automatische Thumbnail-Erzeugung
- Hintergrundverarbeitung mit Redis und Django RQ
- Dockerisierte Umgebung für ein reproduzierbares Setup
- Anbindung an eine PostgreSQL-Datenbank

## Voraussetzungen

Stelle sicher, dass auf deinem System folgende Software installiert ist:

- Docker
- Git

:::note
Django, PostgreSQL, Redis, ffmpeg und alle weiteren Abhängigkeiten werden automatisch in den Docker-Containern installiert.
:::

## Schnellstart

### Repository klonen

```bash
git clone https://github.com/NicoMeyerDev/Videoflix
```

### In das Projekt wechseln

```bash
cd Videoflix
```

### Anwendung konfigurieren

Lege die Umgebungsdatei aus der Vorlage an:

- unter Windows: `copy .env.template .env`
- unter macOS/Linux: `cp .env.template .env`

Öffne danach `.env` und trage deine Werte ein, zum Beispiel:

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
Gmail verlangt ein App-Passwort, nicht dein normales Gmail-Passwort.
:::

### Container starten

```bash
docker compose up --build -d
```

Das Entrypoint-Skript wartet automatisch auf PostgreSQL, wendet die Datenbankmigrationen an, sammelt die statischen Dateien und legt einen Standard-Superuser für die lokale Entwicklung an.

### Anwendung öffnen

- Backend: `http://localhost:8000/`
- Admin-Bereich: `http://localhost:8000/admin/`

## Nutzung

### Ablauf der Authentifizierung

Die Registrierung erfordert eine E-Mail-Aktivierung:

Registrieren → Aktivierungsmail → Konto aktivieren → einloggen

Das Zurücksetzen des Passworts ist per E-Mail möglich.

### Videoverarbeitung

1. Video über das Django-Admin hochladen
2. Eine Hintergrundaufgabe startet automatisch
3. ffmpeg wandelt das Video in das HLS-Format um
4. Die Auflösungen 480p, 720p und 1080p werden erzeugt
5. Ein Thumbnail wird automatisch erzeugt
6. Das streamfertige Ergebnis wird für die Wiedergabe gespeichert

### Fehlerbehebung unter Windows

Startet der Backend-Container nicht und du siehst `exec ./backend.entrypoint.sh: no such file or directory`, nutzt die Datei vermutlich Windows-Zeilenenden (`CRLF`) statt Linux-Zeilenenden (`LF`).

1. Öffne `backend.entrypoint.sh` in VS Code
2. Klicke unten rechts auf `CRLF` und wechsle zu `LF`
3. Speichere die Datei und baue die Container neu:

```bash
docker compose down
docker compose up --build -d
```

### Zugehörige Repositories

| Repository   | Beschreibung                                                             |
| ------------ | ------------------------------------------------------------------------ |
| **Frontend** | [Videoflix-Frontend](https://github.com/NicoMeyerDev/Videoflix-Frontend) |
| **Backend**  | [Videoflix](https://github.com/NicoMeyerDev/Videoflix)                   |

**Technik:** Python, Django, Django REST Framework, PostgreSQL, Redis, Django RQ, ffmpeg, Docker, JWT

<!-- TODO: add architecture details and screenshots -->
