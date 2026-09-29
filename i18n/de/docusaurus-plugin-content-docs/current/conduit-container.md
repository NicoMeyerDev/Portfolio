---
id: conduit-container
title: Conduit Container
sidebar_position: 3
---

# Conduit Container

## Voraussetzungen
Um diese Umgebung zu installieren und zu betreiben, muss folgende Software auf deinem System installiert sein:

- Docker (aktuelle Version)


## Schnellstart

### Repository klonen
```bash
git clone git@github.com:NicoMeyerDev/Conduit-Container.git
```

### In das Projekt wechseln
```bash
cd Conduit-Container
```

### Anwendung konfigurieren
Benenne die mitgelieferte Beispiel-Konfigurationsdatei um:

```bash
cp example.env .env
```
> [!NOTE]
> Bearbeite die Datei `.env` und konfiguriere die benötigten Umgebungsvariablen.

Mindestens solltest du setzen:

- `DJANGO_SECRET_KEY`
- `POSTGRES_PASSWORD`
- `DJANGO_ALLOWED_HOSTS` (füge die IP-Adresse deines Servers hinzu, wenn du auf einer VM deployst)

### Docker-Images bauen

```bash
docker compose build
```

### Anwendung starten

```bash
docker compose up -d
```

### Anwendung öffnen
`http://<HOST_IP>:8282`


## Nutzung

### Datenpersistenz

Die PostgreSQL-Daten liegen in einem benannten Docker-Volume (`postgres_data`), das im Datenbank-Container unter `/var/lib/postgresql/data` eingebunden ist. So bleiben deine Daten bei Container-Neustarts erhalten. `docker compose down` lässt das Volume unangetastet, `docker compose down -v` entfernt es dauerhaft und setzt damit die Datenbank zurück.

### Container-Restart-Policy

Alle Services sind mit `restart: unless-stopped` konfiguriert. Das heißt: Container starten nach einem Absturz oder Neustart des Systems automatisch neu, aber nicht, wenn sie manuell gestoppt wurden.

### Verwaltung von Secrets

Sensible Konfiguration (Datenbank-Zugangsdaten, Django Secret Key) liegt nie im Code. Die Werte kommen stattdessen aus einer `.env`-Datei, die über `.gitignore` von der Versionskontrolle ausgeschlossen ist. Kopiere `example.env` nach `.env` und trage vor dem Start der Anwendung deine eigenen Werte ein.


## Automatische Deployments

Automatisiere dein Rollout mit **GitHub Actions**, ganz ohne manuelles SSH-Login.

### 1. Workflow-Datei erstellen

Lege in deinem Projekt diese Ordnerstruktur an:

```
.github/
└── workflows/
    └── deployment.yaml
```
> [!WARNING]
> Häufiger Fehler: Der Ordner muss `workflows` (Plural) heißen, sonst erkennt GitHub Actions ihn nicht.

Definiere in `deployment.yaml` diese vier Abschnitte:

| Abschnitt | Zweck |
|---|---|
| **Name** | Der Name des Workflows |
| **Trigger** (`on:`) | Das Ereignis, das das Deployment startet (z. B. ein Push auf einen Branch) |
| **Jobs** | Die auszuführenden Aufgaben und die Umgebung dafür (z. B. `ubuntu-latest`) |
| **Steps** | Die einzelnen Aktionen, die nacheinander ausgeführt werden |

### 2. Secrets und Variablen

| Typ | Verschlüsselt? | Beispiel |
|---|---|---|
| **Secret** | Ja, wird nie im Klartext angezeigt | privater SSH-Schlüssel, Passwort |
| **Variable** | Nein, in der Oberfläche sichtbar | GitHub-Benutzername |

> [!WARNING]
> Verwechsle die beiden nicht. Sensible Zugangsdaten gehören in **Secrets**, nicht in eine einfache `.env`-Datei, die ins Repository committet wird.

### 3. GitHub Secrets hinzufügen

1. Öffne dein Repository auf GitHub
2. Klicke auf **Settings**
3. In der linken Seitenleiste: **Security** → **Secrets and variables**
4. Wähle im Dropdown **Actions**
5. Füge diese Secrets hinzu:

| Secret | Beschreibung |
|---|---|
| `SSH_PRIVATE_KEY` | Privater Schlüssel zur Authentifizierung am Server |
| `SSH_USER` | Benutzername auf dem SSH-Server |
| `SSH_HOST` | Serveradresse (IP oder Domain) |

### 4. Das Deployment auslösen

| Methode | Vorgehen | Voraussetzung |
|---|---|---|
| **Automatisch** | Einen Commit auf den Trigger-Branch pushen | Keine, funktioniert direkt |
| **Manuell** | Zum Tab **Actions** gehen → **Run workflow** | Erfordert `workflow_dispatch:` unter `on:` |

> [!TIP]
> Wenn der Button „Run workflow“ fehlt, prüfe, ob `workflow_dispatch:` in deiner Trigger-Konfiguration steht.

Öffne nach dem Auslösen den Tab **Actions**, um den Lauf live zu verfolgen, Schritt für Schritt, inklusive der Logs jeder Stufe.

**Technik:** YAML, Shell-Scripting, Container

<!-- TODO: add architecture details, screenshots, and setup/quickstart instructions -->
