---
id: coderr
title: Coderr
sidebar_position: 7
---

# Coderr

## Beschreibung

Coderr ist eine RESTful-Backend-API für eine Freelancer-Plattform für Entwickler, gebaut mit Django REST Framework.

Das Backend übernimmt alle Kernfunktionen wie Benutzerverwaltung, Projektverwaltung, Buchungen und die Kommunikation zwischen Kunden und Entwicklern. Es ist so ausgelegt, dass es sich nahtlos in eine bestehende Frontend-Anwendung einbinden lässt.

## Voraussetzungen

Stelle sicher, dass auf deinem System folgende Software installiert ist:

- Python 3.12
- Git

## Schnellstart

### Repository klonen

```bash
git clone https://github.com/NicoMeyerDev/coderr-Backend.git
```

### In das Projekt wechseln

```bash
cd coderr-Backend
```

### Virtuelle Umgebung erstellen und aktivieren

```bash
python -m venv env
```

Aktiviere sie:

- unter Windows: `.\env\Scripts\Activate.ps1`
- unter macOS/Linux: `source env/bin/activate`

### Abhängigkeiten installieren

```bash
pip install -r requirements.txt
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

Die API ist danach unter `http://127.0.0.1:8000/` erreichbar.

## Nutzung

### Zugehörige Repositories

| Repository   | Beschreibung                                                     |
| ------------ | ---------------------------------------------------------------- |
| **Frontend** | [Coderr-Frontend](https://github.com/NicoMeyerDev/Coderr-Frontend) |
| **Backend**  | [coderr-Backend](https://github.com/NicoMeyerDev/coderr-Backend) |

Das Frontend ist eine einfache Vanilla-JavaScript-Anwendung. Es braucht das laufende Backend, um zu funktionieren.

**Technik:** Python, Django, Django REST Framework, PostgreSQL

<!-- TODO: add architecture details and screenshots -->
