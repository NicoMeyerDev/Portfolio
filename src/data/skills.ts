import {translate} from '@docusaurus/Translate';

export interface Skill {
  id: string;
  icon: string;
  label: string;
  usage: string[];
  // Dark logos need a light chip behind them to stay readable on the card.
  lightChip?: boolean;
}

export interface SkillGroup {
  id: 'backend' | 'devsecops' | 'ai';
  title: string;
  skills: Skill[];
}

// Built at render time so translate() picks the active locale.
// TODO: check the bullets of the newer skills (REST APIs, SQL/PostgreSQL,
// Testing, Authentication) against what was really done.
export function getSkillGroups(): SkillGroup[] {
  return [
    {
      id: 'backend',
      title: translate({id: 'skills.group.backend', message: 'Backend'}),
      skills: [
        {
          id: 'python',
          icon: 'img/skills/python.svg',
          label: 'Python',
          usage: [
            translate({id: 'skills.python.1', message: 'Entwickelte das Backend der Coaching-App Taktix'}),
            translate({id: 'skills.python.2', message: 'Integrierte Gemini zur automatisierten Quiz-Erstellung in Quizzly'}),
            translate({id: 'skills.python.3', message: 'Entwickelte einen Seed-Befehl zur Erstellung von Testdaten im Baby Tools Shop'}),
          ],
        },
        {
          id: 'django',
          icon: 'img/skills/django.svg',
          label: 'Django',
          lightChip: true,
          usage: [
            translate({id: 'skills.django.1', message: 'Entwickelte die Backends von Coderr und Quizzly'}),
            translate({id: 'skills.django.2', message: 'Implementierte Registrierung und Login bei Taktix'}),
            translate({id: 'skills.django.3', message: 'Verwaltete Datenbankänderungen mit Migrationen in Quizzly'}),
          ],
        },
        {
          id: 'rest-api',
          icon: 'img/skills/api.svg',
          label: 'REST API',
          usage: [
            translate({id: 'skills.rest.1', message: 'Entwickelte die REST-API von Taktix'}),
            translate({id: 'skills.rest.2', message: 'Entwickelte mit Django REST Framework die API von Coderr'}),
            translate({id: 'skills.rest.3', message: 'Sicherte die Endpunkte von Quizzly mit JWT ab'}),
          ],
        },
        {
          id: 'sql',
          icon: 'img/skills/postgresql.svg',
          lightChip: true,
          label: 'SQL / PostgreSQL',
          usage: [
            translate({id: 'skills.sql.1', message: 'Modellierte die PostgreSQL-Datenbank von Taktix'}),
            translate({id: 'skills.sql.2', message: 'Entwarf die Datenbankstruktur für Anbieter, Angebote und Kunden in Coderr'}),
            translate({id: 'skills.sql.3', message: 'Sicherte PostgreSQL-Daten mit einem Docker-Volume im Conduit Container'}),
          ],
        },
        {
          id: 'testing',
          icon: 'img/skills/testing.svg',
          label: 'Testing',
          usage: [
            translate({id: 'skills.testing.1', message: 'Testete REST-Endpunkte mit Postman-Collections in meinen Backend-Projekten'}),
            translate({id: 'skills.testing.2', message: 'Schrieb Tests mit dem Django-Testrunner im Baby Tools Shop'}),
            translate({id: 'skills.testing.3', message: 'Prüfte Verbindung und Neustart des Minecraft Servers mit MCStatus'}),
          ],
        },
        {
          id: 'auth',
          icon: 'img/skills/auth.svg',
          label: translate({id: 'skills.auth.label', message: 'Authentifizierung'}),
          usage: [
            translate({id: 'skills.auth.1', message: 'Implementierte JWT-Authentifizierung in Quizzly'}),
            translate({id: 'skills.auth.2', message: 'Implementierte Registrierung und Login in Taktix'}),
            translate({id: 'skills.auth.3', message: 'Implementierte Benutzerverwaltung und Authentifizierung in Coderr'}),
          ],
        },
      ],
    },
    {
      id: 'devsecops',
      title: translate({id: 'skills.group.devsecops', message: 'DevSecOps'}),
      skills: [
        {
          id: 'docker',
          icon: 'img/skills/docker.svg',
          label: 'Docker',
          usage: [
            translate({id: 'skills.docker.1', message: 'Containerisierte den Baby Tools Shop mit Dockerfile und Volume-Mapping'}),
            translate({id: 'skills.docker.2', message: 'Erstellte ein eigenes Dockerfile auf OpenJDK-Basis für den Minecraft-Server'}),
            translate({id: 'skills.docker.3', message: 'Betrieb WordPress, MySQL und phpMyAdmin mit Docker Compose'}),
          ],
        },
        {
          id: 'cicd',
          icon: 'img/skills/cicd.svg',
          label: translate({id: 'skills.cicd.label', message: 'CI/CD mit GitHub Actions'}),
          usage: [
            translate({id: 'skills.cicd.1', message: 'Baute die dreistufige Pipeline im Conduit Container: Build, Konfiguration, Deployment'}),
            translate({id: 'skills.cicd.2', message: 'Veröffentlichte Images über die GitHub Container Registry im Conduit Container'}),
            translate({id: 'skills.cicd.3', message: 'Richtete das automatische Deployment dieses Portfolios auf GitHub Pages ein'}),
          ],
        },
        {
          id: 'shell',
          icon: 'img/skills/shell.svg',
          label: translate({id: 'skills.shell.label', message: 'Linux / Shell-Scripting'}),
          usage: [
            translate({id: 'skills.shell.1', message: 'Schrieb das Start-Skript entrypoint.sh für den Minecraft Server'}),
            translate({id: 'skills.shell.2', message: 'Implementierte das Deployment per SSH auf einen Linux-Server im Conduit-Container'}),
            translate({id: 'skills.shell.3', message: 'Arbeitete mit Kali Linux für Sicherheitstests im Juice Shop Master'}),
          ],
        },
        {
          id: 'security',
          icon: 'img/skills/security.svg',
          label: translate({id: 'skills.security.label', message: 'IT-Sicherheit'}),
          usage: [
            translate({id: 'skills.security.1', message: 'Analysierte Requests mit Burp Suite und erlangte per Mass Assignment Admin-Rechte im Juice Shop Master'}),
            translate({id: 'skills.security.2', message: 'Umging die Zahlungsprüfung mit einer manipulierten Anfrage im Juice Shop Master (Deluxe Fraud)'}),
            translate({id: 'skills.security.3', message: 'Lagerte Zugangsdaten in .env-Dateien statt im Code, im WordPress- und Conduit-Projekt'}),
          ],
        },
        {
          id: 'yaml',
          icon: 'img/skills/yaml.svg',
          label: 'YAML',
          usage: [
            translate({id: 'skills.yaml.1', message: 'Schrieb die Docker-Compose-Dateien für WordPress und Conduit Container'}),
            translate({id: 'skills.yaml.2', message: 'Definierte den GitHub-Actions-Workflow im Conduit Container'}),
          ],
        },
        {
          id: 'git',
          icon: 'img/skills/git.svg',
          label: 'Git',
          usage: [
            translate({id: 'skills.git.1', message: 'Arbeitete mit Feature-Branches und Pull Requests in meinen Projekten'}),
            translate({id: 'skills.git.2', message: 'Prüfte den Code-Stil mit black und isort vor Commits in meinen Projekten'}),
          ],
        },
      ],
    },
    {
      id: 'ai',
      title: translate({id: 'skills.group.ai', message: 'KI'}),
      skills: [
        {
          id: 'ai-dev',
          icon: 'img/skills/ai-dev.svg',
          label: translate({id: 'skills.ai.dev.label', message: 'KI-gestützte Entwicklung'}),
          usage: [
            translate({id: 'skills.ai.dev.1', message: 'Nutze KI für Fehleranalyse, Code-Reviews und Recherche, zum Beispiel bei Taktix'}),
            translate({id: 'skills.ai.dev.2', message: 'Treffe Architekturentscheidungen selbst und prüfe und teste generierten Code vor jedem Commit'}),
          ],
        },
        {
          id: 'ai-apps',
          icon: 'img/skills/ai-apps.svg',
          label: translate({id: 'skills.ai.apps.label', message: 'KI in Anwendungen'}),
          usage: [
            translate({id: 'skills.ai.apps.1', message: 'Integriere KI gezielt in eigene Anwendungen, z. B. Gemini zur Quiz-Erstellung in Quizzly'}),
            translate({id: 'skills.ai.apps.2', message: 'Entwickle ein Regelwerk für KI-Nutzung: Aufgaben, Datengrenzen und Prüfung der Ergebnisse'}),
          ],
        },
      ],
    },
  ];
}
