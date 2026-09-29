---
id: quizzly
title: Quizzly
sidebar_position: 8
---

# Quizzly

## Beschreibung

Quizzly ist ein KI-gestütztes Backend, das YouTube-Videos in interaktive Quizze verwandelt. Du gibst einfach eine YouTube-URL an, und die App erstellt automatisch ein Quiz mit 10 Fragen zum Inhalt des Videos: ideal zum Lernen, Wiederholen oder einfach zum Spaß.

## Voraussetzungen

Stelle sicher, dass auf deinem System folgende Software installiert ist:

- Python 3.12
- Git

## Schnellstart

### Repository klonen

```bash
git clone https://github.com/NicoMeyerDev/Quizzly-backend
```

### In das Projekt wechseln

```bash
cd quizzly-backend
```

### Virtuelle Umgebung erstellen und aktivieren

Eine virtuelle Umgebung sorgt dafür, dass die installierten Pakete nur für dieses Projekt verwendet werden.

```bash
python -m venv env
```

Aktiviere sie:

- unter Windows: `.\env\Scripts\Activate.ps1`
- unter macOS/Linux: `source env/bin/activate`

:::note
Es hat geklappt, wenn `(env)` am Anfang deiner Kommandozeile erscheint.
:::

### Abhängigkeiten installieren

```bash
pip install -r requirements.txt
```

### Anwendung konfigurieren

Lege im Hauptverzeichnis eine Datei `.env` an und trage deinen Gemini-API-Key ein:

```bash
GEMINI_API_KEY=your-api-key-here
```

### Datenbank einrichten

```bash
python manage.py migrate
```

### Anwendung starten

```bash
python manage.py runserver
```

### Anwendung öffnen

`http://127.0.0.1:8000/`

## Nutzung

### Konfiguration

Die KI-Funktionen nutzen die Google-Gemini-API. Der Schlüssel wird aus der Variable `GEMINI_API_KEY` in der Datei `.env` gelesen. Einen kostenlosen API-Key bekommst du im [Google AI Studio](https://aistudio.google.com).

### Datenbank

Die Migrationsdateien sind bereits im Projekt enthalten, deshalb ist `makemigrations` nicht nötig. `python manage.py migrate` genügt.

### Zugehörige Repositories

| Repository   | Beschreibung                                                         |
| ------------ | -------------------------------------------------------------------- |
| **Frontend** | [quizzly-frontend](https://github.com/NicoMeyerDev/quizzly-frontend) |
| **Backend**  | [quizzly-backend](https://github.com/NicoMeyerDev/quizzly-backend)   |

**Technik:** Python, Django, Django REST Framework, JWT, Google Gemini (LLM)

<!-- TODO: add architecture details and screenshots -->
