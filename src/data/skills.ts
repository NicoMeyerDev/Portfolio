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
  id: 'backend' | 'devsecops';
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
            translate({id: 'skills.python.1', message: 'Baute ein Projekt mit Python'}),
            translate({id: 'skills.python.2', message: 'Schrieb Skripte zur Automatisierung von Aufgaben'}),
            translate({id: 'skills.python.3', message: 'Baute APIs'}),
          ],
        },
        {
          id: 'django',
          icon: 'img/skills/django.svg',
          label: 'Django',
          lightChip: true,
          usage: [
            translate({id: 'skills.django.1', message: 'Baute das Projekt-Backend mit Django'}),
            translate({id: 'skills.django.2', message: 'Implementierte Benutzer-Authentifizierung und Berechtigungen'}),
            translate({id: 'skills.django.3', message: 'Implementierte Views und Templates für das Projekt'}),
          ],
        },
        {
          id: 'rest-api',
          icon: 'img/skills/api.svg',
          label: 'REST APIs (Django REST Framework)',
          usage: [
            translate({id: 'skills.rest.1', message: 'Baute REST-Endpunkte mit Django REST Framework'}),
            translate({id: 'skills.rest.2', message: 'Nutzte Serializer und Viewsets'}),
            translate({id: 'skills.rest.3', message: 'Sicherte Endpunkte mit Berechtigungen ab'}),
          ],
        },
        {
          id: 'sql',
          icon: 'img/skills/database.svg',
          label: 'SQL / PostgreSQL',
          usage: [
            translate({id: 'skills.sql.1', message: 'Schrieb SQL-Abfragen mit Joins und Filtern'}),
            translate({id: 'skills.sql.2', message: 'Modellierte relationale Datenbankschemas'}),
            translate({id: 'skills.sql.3', message: 'Betrieb PostgreSQL in Docker-Containern'}),
          ],
        },
        {
          id: 'testing',
          icon: 'img/skills/testing.svg',
          label: 'Testing (pytest, Postman)',
          usage: [
            translate({id: 'skills.testing.1', message: 'Schrieb Unit-Tests mit pytest'}),
            translate({id: 'skills.testing.2', message: 'Nutzte Fixtures für Testdaten'}),
            translate({id: 'skills.testing.3', message: 'Führte Tests automatisch in der CI-Pipeline aus'}),
            translate({id: 'skills.testing.4', message: 'Erstellte Postman-Collections für manuelle API-Tests'}),
          ],
        },
        {
          id: 'auth',
          icon: 'img/skills/auth.svg',
          label: translate({id: 'skills.auth.label', message: 'Authentifizierung'}),
          usage: [
            translate({id: 'skills.auth.1', message: 'Implementierte Login und Session-Verwaltung'}),
            translate({id: 'skills.auth.2', message: 'Richtete Multi-Faktor-Authentifizierung ein'}),
            translate({id: 'skills.auth.3', message: 'Beschränkte Zugriffe über Rollen und Berechtigungen'}),
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
            translate({id: 'skills.docker.1', message: 'Containerisierte ein Projekt mit einem Dockerfile'}),
            translate({id: 'skills.docker.2', message: 'Baute CI/CD-Pipelines rund um Docker-Images'}),
            translate({id: 'skills.docker.3', message: 'Automatisierte Builds, Tests und Deployments'}),
          ],
        },
        {
          id: 'cicd',
          icon: 'img/skills/cicd.svg',
          label: translate({id: 'skills.cicd.label', message: 'CI/CD mit GitHub Actions'}),
          usage: [
            translate({id: 'skills.cicd.1', message: 'Automatisierte Builds und Tests'}),
            translate({id: 'skills.cicd.2', message: 'Nutzte fertige Actions für Standardaufgaben'}),
            translate({id: 'skills.cicd.3', message: 'Richtete automatisches Deployment auf GitHub Pages bei jedem Push auf main ein'}),
          ],
        },
        {
          id: 'shell',
          icon: 'img/skills/shell.svg',
          label: translate({id: 'skills.shell.label', message: 'Linux / Shell-Scripting'}),
          usage: [
            translate({id: 'skills.shell.1', message: 'Legte neue Benutzer an und setzte ihre Berechtigungen'}),
            translate({id: 'skills.shell.2', message: 'Durchsuchte und filterte Logs mit grep und awk'}),
            translate({id: 'skills.shell.3', message: 'Härtete den SSH-Zugang auf einem Linux-Server'}),
          ],
        },
        {
          id: 'security',
          icon: 'img/skills/security.svg',
          label: translate({id: 'skills.security.label', message: 'IT-Sicherheit'}),
          usage: [
            translate({id: 'skills.security.1', message: 'Simulierte Angriffe und fand Schwachstellen'}),
            translate({id: 'skills.security.2', message: 'Richtete Multi-Faktor-Authentifizierung ein'}),
            translate({id: 'skills.security.3', message: 'Implementierte Authentifizierungs- und Autorisierungsmechanismen'}),
          ],
        },
        {
          id: 'yaml',
          icon: 'img/skills/yaml.svg',
          label: 'YAML',
          usage: [
            translate({id: 'skills.yaml.1', message: 'Schrieb GitHub-Actions- und Docker-Compose-Dateien'}),
            translate({id: 'skills.yaml.2', message: 'Nutzte Listen und Maps in komplexen Konfigurationen'}),
          ],
        },
        {
          id: 'git',
          icon: 'img/skills/git.svg',
          label: 'Git',
          usage: [
            translate({id: 'skills.git.1', message: 'Nutzte Feature-Branches und Pull Requests'}),
            translate({id: 'skills.git.2', message: 'Schrieb klare, aussagekräftige Commit-Messages'}),
            translate({id: 'skills.git.3', message: 'Löste Merge-Konflikte und nutzte Rebase'}),
          ],
        },
      ],
    },
  ];
}
