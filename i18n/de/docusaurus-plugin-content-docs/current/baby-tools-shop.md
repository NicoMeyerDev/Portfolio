---
id: baby-tools-shop
title: Baby Tools Shop
sidebar_position: 2
---

# Baby Tools Shop

Baby Tools Shop ist ein Online-Shop, in dem Kunden Produkte für Babys und Kinder durchstöbern und kaufen können. Kunden können Produkte kommentieren und bewerten. Das Projekt entstand als Lernübung.

## Voraussetzungen

Um reibungslos mit dem Repository und der enthaltenen Software zu arbeiten, müssen folgende Werkzeuge installiert sein:

- Python-Interpreter
- OCI-kompatible Container-Engine (z. B. Podman, Docker usw.)
- Editor/IDE deiner Wahl (VS Code, PyCharm usw.)

## Schnellstart

So kommst du schnell mit dem Projekt in Gang:

1. Repository klonen
1. In das Repository wechseln
1. (optional) eine virtuelle Umgebung mit `python -m venv my-venv` erstellen
    1. virtuelle Umgebung aktivieren:
        - unter Windows: `my-venv/Scripts/activate`
        - unter macOS/Linux: `source my-venv/bin/activate`
1. Projektabhängigkeiten mit `pip install -r requirements.txt` installieren
1. benötigte Umgebungsvariablen der Anwendung konfigurieren
    - `cp example.env .env`
1. mit `cd src` in das Verzeichnis `src` wechseln
1. Datenbank vorbereiten (Migrationen erstellen und anwenden)
    1. `python manage.py makemigrations`
    1. `python manage.py migrate`
1. Anwendung mit `python manage.py runserver` starten
1. prüfen, ob die Anwendung läuft, indem du `localhost:8000` aufrufst
1. (optional) einen Superuser anlegen: `python manage.py createsuperuser`

## Projektstruktur

- `.gitlab`: GitLab-spezifische Projektdateien
- `.github`: GitHub-spezifische Projektdateien
- `src`: Quellcode der Anwendung mit dem Django-Projekt, den Apps und weiteren Dateien
- `requirements.txt`: die Projektabhängigkeiten

### Übersicht der Apps

Das Projekt ist in mehrere Apps aufgeteilt:

- `products`: verwaltet Produktlisten, Kategorien und Tags
- `users`: übernimmt Benutzer-Authentifizierung und Registrierung

Jede App hat eigene Dateien `models.py`, `views.py`, `urls.py` und `admin.py`, um ihre Funktionalität zu kapseln.

## Nutzung

In diesem Abschnitt liest du mehr Details zum Projekt.

### Konfiguration

So konfigurierst du das Projekt:

1. Kopiere die Beispiel-Umgebungsdatei in das Verzeichnis `src`: `cp example.env src/.env`.
    - Die Datei muss neben der Datei `manage.py` liegen, damit sie korrekt funktioniert.
    Andere Orte funktionieren eventuell auch, dafür gibt es aber keine Garantie, und im Zweifel musst du das Projekt entsprechend anpassen.
2. Öffne deine `src/.env` und setze die benötigten Umgebungsvariablen:
    - `ALLOWED_HOSTS`: kommagetrennte Liste der erlaubten Hosts => Standardwert `'localhost, 127.0.0.1, 0.0.0.0'`
    - `DEBUG`: `True` für die Entwicklung oder `False` für die Produktion. Standardwert ist `True`

### Linting-Werkzeuge ausführen

> [!tip]
> Damit die folgenden Routinen laufen, müssen die benötigten Pakete installiert sein (das passiert mit `pip install -r requirements.txt`).
>
> Wenn du eine virtuelle Umgebung nutzt, muss sie ebenfalls aktiviert sein.

Für Code-Qualitätsprüfungen von Stil und Formatierung führst du im Terminal diese Befehle aus:

```bash
# to format the python code
black .
# to apply correct sorting for imports
isort .
```

#### Wann ausführen

Prüfe den Code-Stil, bevor du Commits ins Remote-Repository pushst.
Falls du es vergessen und eine Regel verletzt hast, schlägt der CI-Workflow fehl -> Linting ausführen, Änderungen hinzufügen, committen, pushen -> prüfen, ob die Pipeline durchläuft

> [!note]
> Wenn ein CI-Workflow fehlschlägt, solltest du die Logs prüfen, um herauszufinden, wo er fehlgeschlagen ist und warum.

### Tests

Das Projekt enthält Tests für die jeweiligen Apps in den entsprechenden Paketen.
Tests in Django können entweder in einer Datei `tests.py` innerhalb einer Django-App liegen oder in einem Modul namens `tests` (im Grunde ein Ordner mit einer Datei `__init__.py`).

> [!TIP]
> Der Django-Testrunner findet Tests standardmäßig, indem er alle Python-Dateien sucht, deren Name das Wort `test` enthält, z. B. `test.py`, `test_model.py` oder ähnlich.

Beispielstruktur:

```console
baby-tool-world/src/products
├───management
├───migrations
├───templates
└───tests <-- this is the module
      ├───__init__.py
      ├───test_category_model.py <-- this is a test file
      └───test_category_model.py <-- this is a test file too
```

#### Tests ausführen

Um die Tests mit dem `django testrunner` auszuführen, nutzt du diesen Befehl:

- `python manage.py test`, ausgeführt in dem Ordner, in dem `manage.py` liegt -> `src`

Mehr zum Testen steht in der Test-Dokumentation dieses Repositorys.

### Betrieb mit einem WSGI-Server

**WSGI** (Web Server Gateway Interface) ist eine Spezifikation, die eine Standardschnittstelle zwischen Webservern und Python-Webanwendungen oder -Frameworks definiert.
Sie fungiert als Brücke, über die Webserver einheitlich mit Python-Anwendungen kommunizieren können.

In Django-Deployments dient WSGI dazu, die Anwendung in der Produktion auszuliefern.
Es ermöglicht dem Webserver (z. B. Gunicorn, uWSGI oder Apache mit mod_wsgi), Anfragen an die Django-Anwendung weiterzuleiten und Antworten an den Client zurückzugeben. So verarbeitet die Anwendung HTTP-Anfragen effizient und zuverlässig in einem skalierbaren Setup.

> `gunicorn` und `waitress` sind ähnliche Werkzeuge und lassen sich für denselben Zweck einsetzen,
> aber manchmal führt `gunicorn` unter Windows zu Problemen, die sich mit `waitress` umgehen lassen.
>
> Siehe das folgende [Zitat](https://docs.gunicorn.org/en/stable/index.html) von der offiziellen gunicorn-Website:
>> Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX.

Mehr zu WSGI und seiner Konfiguration steht in der offiziellen Dokumentation.

### Die Anwendung mit Daten befüllen

Dieser Abschnitt führt dich durch das Einspielen erster Daten in die Anwendung.

Um die Anwendung initial zu befüllen, führst du den Management-Befehl `seed_db` aus. Er füllt die Datenbank mit einigen Kategorien und Testprodukten.

Wechsle dazu in das Verzeichnis, in dem deine Datei `manage.py` liegt, und führe diesen Befehl aus:

```bash
python manage.py seed_db
```

### Containerisierung

Dieser Abschnitt gibt einen kurzen Überblick über die Containerisierung der Django-App.

> [!NOTE]
> Diese Anleitung setzt voraus, dass du die Docker Engine, Docker Desktop oder etwas Ähnliches nutzt.
> Für andere OCI-konforme Werkzeuge unterscheiden sich die Befehle leicht, sind aber im Kern gleich.

#### Image bauen

Du baust das Container-Image, indem du diesen Befehl im Terminal ausführst:

```bash
# use -t to provide a tag together with the image name
# -> baby-tools-world is the image name, 'local' is the tag
docker build -t baby-tools-world:local .
```

#### Container starten

Um einen Container auf Basis des Images zu starten, nutzt du diesen Befehl im Terminal:

```bash
docker run --rm -it -p 8000:8000 baby-tools-world:local
```

Um vordefinierte Umgebungskonfigurationen der App zu überschreiben, kannst du eine `.env`-Datei angeben, indem du die Option wie unten zum Befehl hinzufügst:

```bash
docker run --rm -it -p 8000:8000 --env-file .env baby-tools-world:local
```

#### Befehle im Docker-Container

1. ein weiteres Terminal öffnen
2. alle laufenden Container mit `docker ps` auflisten und die gewünschte CONTAINER_ID kopieren
3. die Bash-Shell öffnen, um einen Befehl in einem bereits laufenden Container auszuführen: `docker exec -t [container-id] bash`
4. Jetzt kannst du alle Befehle in diesem laufenden Container ausführen


**Technik:** Python, Docker, Django

<!-- TODO: add architecture details, screenshots, and setup/quickstart instructions -->
