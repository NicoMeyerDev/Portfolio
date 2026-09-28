---
id: wordpress
title: WordPress
sidebar_position: 4
---


# WordPress

## Description

This is a Project to set up, run and maintain your personal Wordpress server. It includes installation, instructions, configuration guidance, server startup procedures and backup management workflows.

## Table of contents

* [Description](#description)
* [Prerequisites](#prerequisites)
* [Quickstart](#quickstart)
* [Usage](#usage)
    * [Data Persistence](#data-persistence)
    * [Container Restart Policy](#container-restart-policy)
    * [Secrets Management](#secrets-management)


## Prerequisites
To install and run this environment, Docker must be installed on your system.

## Quickstart

* Navigate to the parent directory where you want to store the project

```bash
cd /path/to/your/projects
```

* Clone the repository

```bash
git clone https://github.com/NicoMeyerDev/Wordpress_Server.git
```

* Navigate to the project directory

```bash
cd Wordpress_Server
```

* Create the environment file

```bash
cp example.env .env
```

* Configure the following values
    * DB_NAME
    * DB_PASSWORD
    * DB_ROOT_PASSWORD
    * DB_USER

* Start the containers

```bash
docker compose up -d
```

* Access WordPress. Open your web browser and navigate to:
```bash
http://<host-ip>:8080
```

* Complete the WordPress installation wizard.
* Access phpMyAdmin. Open your web browser and navigate to:
```bash
http://<host-ip>:8081
```

## Usage
The following Docker images are used:
* mysql:9.7.1
* phpmyadmin:5.2.3
* wordpress:7-apache

### Data Persistence

* The MySQL database stores its data in a Docker volume mounted at: `/var/lib/mysql`
* WordPress files are stored in a Docker volume mounted at: `/var/www/html`

### Container Restart Policy

All services are configured with a restart policy to ensure availability:

* **WordPress** and **db** use `restart: always`, so they automatically restart after every reboot or crash, ensuring the blog stays online.
* **phpMyAdmin** uses `restart: unless-stopped`, so it restarts after a crash or reboot, but stays stopped if manually shut down — useful since it's an administrative tool, not a core service.

### Secrets Management

All sensitive credentials (database name, user, password, and root password) are stored in a local `.env` file, which is excluded from the Git repository via `.gitignore`. This prevents secrets from ever being committed to version control.

The `example.env` file serves as a template showing which variables are required, using placeholder values. To configure the project, copy it to `.env` and replace the placeholders with your own values (see [Quickstart](#quickstart)).

Within `docker-compose.yaml`, these values are referenced using `${VARIABLE_NAME}` syntax (e.g. `${DB_PASSWORD}`), so no credentials appear directly in the tracked configuration files.

**Tech:** Yaml, Shell scripting, IT Security

<!-- TODO: add architecture details, screenshots, and setup/quickstart instructions -->
