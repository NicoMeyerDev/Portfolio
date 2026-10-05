---
id: wordpress
title: WordPress
sidebar_position: 4
---

# WordPress

## Beschreibung

Dieses Projekt dient dazu, einen eigenen WordPress-Server aufzusetzen, zu betreiben und zu warten. Es umfasst Installation, Anleitungen, Konfigurationshinweise, Abläufe für den Serverstart und Backup-Workflows.

## Voraussetzungen
Um diese Umgebung zu installieren und zu betreiben, muss Docker auf deinem System installiert sein.

## Schnellstart

* Wechsle in das übergeordnete Verzeichnis, in dem das Projekt liegen soll

```bash
cd /path/to/your/projects
```

* Klone das Repository

```bash
git clone https://github.com/NicoMeyerDev/Wordpress_Server.git
```

* Wechsle in das Projektverzeichnis

```bash
cd Wordpress_Server
```

* Erstelle die Umgebungsdatei

```bash
cp example.env .env
```

* Konfiguriere die folgenden Werte
    * DB_NAME
    * DB_PASSWORD
    * DB_ROOT_PASSWORD
    * DB_USER

* Starte die Container

```bash
docker compose up -d
```

* Rufe WordPress auf. Öffne deinen Webbrowser und gehe zu:
```bash
http://<host-ip>:8080
```

* Schließe den WordPress-Installationsassistenten ab.
* Rufe phpMyAdmin auf. Öffne deinen Webbrowser und gehe zu:
```bash
http://<host-ip>:8081
```

## Nutzung
Diese Docker-Images kommen zum Einsatz:
* mysql:9.7.1
* phpmyadmin:5.2.3
* wordpress:7-apache

### Datenpersistenz

* Die MySQL-Datenbank speichert ihre Daten in einem Docker-Volume, das unter `/var/lib/mysql` eingebunden ist
* WordPress-Dateien liegen in einem Docker-Volume, das unter `/var/www/html` eingebunden ist

### Container-Restart-Policy

Alle Services sind mit einer Restart-Policy konfiguriert, damit sie verfügbar bleiben:

* **WordPress** und **db** nutzen `restart: always`. Sie starten nach jedem Neustart oder Absturz automatisch neu, sodass der Blog online bleibt.
* **phpMyAdmin** nutzt `restart: unless-stopped`. Es startet nach einem Absturz oder Neustart neu, bleibt aber gestoppt, wenn es manuell beendet wurde. Das ist sinnvoll, weil es ein Administrationswerkzeug und kein Kernservice ist.

### Verwaltung von Secrets

Alle sensiblen Zugangsdaten (Datenbankname, Benutzer, Passwort und Root-Passwort) liegen in einer lokalen `.env`-Datei, die über `.gitignore` vom Git-Repository ausgeschlossen ist. So gelangen Secrets nie in die Versionskontrolle.

Die Datei `example.env` dient als Vorlage und zeigt mit Platzhalterwerten, welche Variablen nötig sind. Zum Konfigurieren des Projekts kopierst du sie nach `.env` und ersetzt die Platzhalter durch deine eigenen Werte (siehe [Schnellstart](#schnellstart)).

In der `docker-compose.yaml` werden diese Werte über die Syntax `${VARIABLE_NAME}` referenziert (z. B. `${DB_PASSWORD}`), sodass in den versionierten Konfigurationsdateien keine Zugangsdaten stehen.

**Technik:** YAML, Shell-Scripting, IT-Sicherheit

<!-- TODO: add architecture details, screenshots, and setup/quickstart instructions -->
