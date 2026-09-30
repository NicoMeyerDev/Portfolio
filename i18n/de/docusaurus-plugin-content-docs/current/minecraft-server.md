---
id: minecraft-server
title: Minecraft Server
sidebar_position: 6
---

# Minecraft Server

## Beschreibung
Dieses Projekt dient dazu, einen eigenen Minecraft-Server aufzusetzen, zu betreiben und zu warten. Es umfasst Installation, Anleitungen, Konfigurationshinweise, Abläufe für den Serverstart und Backup-Workflows.

## Voraussetzungen
- Die Docker Engine sollte installiert sein und laufen.
- Du solltest dich im Terminal/in der Shell und mit grundlegenden Docker-Konzepten sicher fühlen.
- Lade den Minecraft-Installer herunter.

## Schnellstart
- Wechsle in das übergeordnete Verzeichnis, in dem das Projekt liegen soll.

``` cd /path/to/your/Project```

- Klone das Repository von GitHub

``` git clone https://github.com/NicoMeyerDev/Mincraft-Server ```

- Wechsle in das geklonte Projektverzeichnis

``` cd mincraft_server ```

- Kopiere die Beispiel-Umgebungsdatei in das Verzeichnis

``` cp example.env .env ```

- Starte den Docker-Server

``` docker compose up -d ```

- Starte das Spiel und melde dich mit einem Java-Minecraft-Client an.
- Wähle Multiplayer
- Klicke auf Direktverbindung
- Gib Server-IP und Port ein

## Nutzung
Diese Konfiguration nutzt einen Standard-Minecraft-Server in Version 26.2. Da die Umgebung vor allem für Dokumentation und Tests gedacht ist und die Systemressourcen begrenzt sind, ist der Server mit mindestens 1 GB und höchstens 2 GB RAM konfiguriert. Diese Werte lassen sich bei Bedarf über die entsprechenden Variablen in der `.env`-Datei anpassen.

Die wichtigste Konfigurationsdatei eines Multiplayer-Servers ist `server.properties`, die die Kerneinstellungen des Servers festlegt. Einige dieser Einstellungen lassen sich über Umgebungsvariablen in der `.env`-Datei überschreiben. Damit diese Überschreibungen wirken, müssen die jeweiligen Umgebungsvariablen in `entrypoint.sh` verarbeitet werden, das dann die entsprechenden Werte in `server.properties` aktualisiert, bevor der Server startet.

## Tests

### Voraussetzungen
- Der Docker-Container läuft (`docker compose up -d`)
- Python 3 ist installiert (für MCStatus)

### Schritte

#### 1. Überschreibungen prüfen
Prüfe, dass die Umgebungsvariablen aus `.env` korrekt in `server.properties` übernommen wurden:

    cat server.properties

Bestätige, dass `max-players` und `difficulty` mit den Werten aus `.env` übereinstimmen.

#### 2. Persistenz nach Neustart prüfen
Starte den Container neu und bestätige, dass Welt und Konfiguration nicht zurückgesetzt werden:

    docker compose restart mc-server
    docker compose logs -f mc-server

Achte auf `Preparing level "world"` ohne `No existing world data, creating new world`.

#### 3. Verbindung mit MCStatus prüfen
Richte eine virtuelle Python-Umgebung ein und installiere MCStatus:

    python -m venv venv
    source venv/bin/activate
    python3 -m pip install mcstatus

Aktiviere den Query-Modus in `server.properties`:

    enable-query=true

Starte den Container neu und führe dann aus:

    mcstatus localhost:8888 ping
    mcstatus localhost:8888 status
    mcstatus localhost:8888 query

#### 4. Automatischen Neustart bei Ausfall prüfen
Ermittle die Prozess-ID des Containers, wie sie das Hostsystem sieht, und beende ihn von dort aus (nicht von innerhalb des Containers):

```bash
docker inspect mc-server --format "{{.State.Pid}}"   # get host-level PID
sudo kill -9 <PID>                                   # replace <PID> with that number
```

Bestätige dann, dass der Container automatisch neu gestartet ist:

    docker compose ps -a

Der Container sollte eine niedrige Laufzeit anzeigen (z. B. „Up X seconds“). Das bestätigt, dass `restart: unless-stopped` den Neustart ausgelöst hat.

#### 5. (Optional) Mit dem Java-Minecraft-Client verbinden
- Starte Minecraft, wähle **Multiplayer** → **Direktverbindung**
- Gib Server-IP und Port `8888` ein

**Technik:** YAML, Shell-Scripting, IT-Sicherheit, Container

<!-- TODO: add architecture details, screenshots, and setup/quickstart instructions -->
