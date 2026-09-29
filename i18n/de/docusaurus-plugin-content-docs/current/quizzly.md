---
id: quizzly
title: Quizzly
sidebar_position: 8
---

# Quizzly

Quizzly ist ein KI-gestütztes Backend, das YouTube-Videos in interaktive Quizze verwandelt.
Du gibst einfach eine YouTube-URL an, und die App erstellt automatisch ein Quiz mit 10 Fragen
zum Inhalt des Videos: ideal zum Lernen, Wiederholen oder einfach zum Spaß.

## Technik

Python, Django, Django REST Framework, JWT, Google Gemini (LLM)

## Zugehörige Repositories

| Repository   | Beschreibung                                                |
| ------------ | ----------------------------------------------------------- |
| **Frontend** | [quizzly-frontend](https://github.com/NicoMeyerDev/quizzly-frontend) |
| **Backend**  | [quizzly-backend](https://github.com/NicoMeyerDev/quizzly-backend)   |

## Voraussetzungen

Stelle sicher, dass auf deinem Computer Folgendes installiert ist:

- [Python 3.12](https://www.python.org/downloads/)
- [Git](https://git-scm.com/)

## Installation Schritt für Schritt

### 1. Repository klonen

Öffne dein Terminal (oder die Eingabeaufforderung) und führe aus:

```bash
git clone https://github.com/NicoMeyerDev/Quizzly-backend
```

Wechsle dann in den Projektordner:

```bash
cd quizzly-backend
```

### 2. Virtuelle Umgebung erstellen und aktivieren

Eine virtuelle Umgebung sorgt dafür, dass die installierten Pakete nur für dieses Projekt verwendet werden.

**Virtuelle Umgebung erstellen:**

```bash
python -m venv env
```

**Virtuelle Umgebung aktivieren:**

- **Windows**

```bash
.\env\Scripts\Activate.ps1
```

- **Mac/Linux**

```bash
source env/bin/activate
```

> **Tipp:** Es hat geklappt, wenn `(env)` am Anfang deiner Kommandozeile erscheint.

### 3. Abhängigkeiten installieren

Installiere alle benötigten Pakete aus der Datei `requirements.txt`:

```bash
pip install -r requirements.txt
```

### 4. Umgebungsvariablen einrichten

Lege im Hauptverzeichnis eine Datei `.env` an und trage deinen Gemini-API-Key ein:

```bash
GEMINI_API_KEY=your-api-key-here
```

> **Tipp:** Einen kostenlosen API-Key bekommst du im [Google AI Studio](https://aistudio.google.com).

### 5. Datenbank einrichten

```bash
python manage.py migrate
```

> **Hinweis:** `makemigrations` ist nicht nötig, weil die Migrationsdateien bereits im Projekt enthalten sind. `migrate` genügt.

### 6. Server starten

```bash
python manage.py runserver
```

Die API ist danach unter folgender Adresse erreichbar:

```
http://127.0.0.1:8000/
```
