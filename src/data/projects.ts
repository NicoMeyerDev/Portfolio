import {translate} from '@docusaurus/Translate';

export type ProjectCategory = 'backend' | 'devsecops';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  tags: string[];
  description: string;
  image: string;
  imageLabel: string;
  // Site-internal docs path (e.g. '/docs/wordpress'); resolved with the base URL.
  docLink?: string;
  githubLink?: string;
  // URL of the running app (opens in a new tab).
  liveLink?: string;
}

// Built at render time so translate() picks the active locale.
// The carousel on the homepage shows the featured projects (max. 5), in
// the order of this list. Everything else only appears on /projects.
export function getProjects(): Project[] {
  return [
    {
      id: 'taktix',
      title: 'Taktix',
      category: 'backend',
      featured: true,
      tags: ['Python', 'Django', 'Docker'],
      description: translate({
        id: 'projects.taktix.description',
        message:
          'Fußballtrainer planen Training und Aufstellungen oft noch mit Zetteln und Chat-Gruppen. Ich habe Taktix als eigene Backend-Anwendung entwickelt, die diese Abläufe zentral an einem Ort bündelt. Die App bildet den kompletten Trainer-Alltag ab: von Kaderverwaltung und Trainingsplanung über Spieltagsvorbereitung und Aufstellung bis zur Nachbereitung in sechs zusammenhängenden Modulen. Ergebnis: eine zentrale Anwendung, die die Planung strukturiert und den organisatorischen Aufwand rund um Training und Spieltag reduziert. Taktix befindet sich aktuell in der Beta-Phase und wird mit echten Trainern aus meinem Vereinsumfeld getestet.',
      }),
      image: 'img/projects/taktix.png',
      imageLabel: translate({
        id: 'projects.taktix.imageLabel',
        message: 'Screenshot der Taktix-Anmeldeseite vor einem Spielplan in der Kabine',
      }),
      docLink: '/docs/taktix',
      // TODO: add the GitHub repo of Taktix.
      githubLink: undefined,
      // TODO: replace with the real live URL of Taktix.
      liveLink: 'https://matchday-app-lqai.onrender.com/',
    },
    {
      id: 'conduit-container',
      title: 'Conduit Container',
      category: 'devsecops',
      featured: true,
      tags: ['YAML', 'Shell scripting', 'Docker'],
      description: translate({
        id: 'projects.conduit.description',
        message:
          'Manuelle Deployments sind fehleranfällig und langsam. Ich habe eine CI/CD-Pipeline mit GitHub Actions und der GitHub Container Registry gebaut, die die Anwendung baut, die Konfiguration vorbereitet und per SSH auf den Server deployt. Ergebnis: ein vollautomatischer Weg von Push bis Produktion in drei Stufen.',
      }),
      image: 'img/projects/conduit-container.svg',
      imageLabel: translate({
        id: 'projects.conduit.imageLabel',
        message: 'Vorschau des Projekts Conduit Container',
      }),
      docLink: '/docs/conduit-container',
      githubLink: 'https://github.com/NicoMeyerDev/Conduit-Container',
    },
    {
      id: 'juice-shop-master',
      title: 'Juice Shop Master',
      category: 'devsecops',
      featured: true,
      tags: ['IT Security', 'Docker'],
      description: translate({
        id: 'projects.juice.description',
        message:
          'Sicherheitslücken versteht man erst, wenn man sie selbst ausnutzt. Ich habe im OWASP Juice Shop Angriffe wie SQL-Injection und Authentifizierungsfehler nachgestellt und dokumentiert. Ergebnis: Write-ups, die zeigen, wie die Lücken funktionieren und wie man sie verhindert.',
      }),
      image: 'img/projects/juice-shop-master.svg',
      imageLabel: translate({
        id: 'projects.juice.imageLabel',
        message: 'Vorschau des Projekts Juice Shop Master',
      }),
      docLink: '/docs/juice-shop-master',
      // TODO: create a dedicated repo for the Juice Shop write-ups and check this link.
      githubLink: 'https://github.com/NicoMeyerDev/Juice-Shop-Master',
    },
    {
      id: 'project-x',
      title: 'Projekt X',
      category: 'backend',
      featured: true,
      tags: ['Python'],
      description: translate({
        id: 'projects.projectx.description',
        message:
          'TODO: Platzhalter für das nächste Projekt. Problem, Umsetzung und Ergebnis ergänzen.',
      }),
      image: 'img/projects/placeholder.svg',
      imageLabel: translate({
        id: 'projects.projectx.imageLabel',
        message: 'Platzhalterbild für Projekt X',
      }),
      // TODO: add docs page and GitHub repo of project X.
      docLink: undefined,
      githubLink: undefined,
    },
    {
      id: 'project-y',
      title: 'Projekt Y',
      category: 'devsecops',
      featured: true,
      tags: ['Docker'],
      description: translate({
        id: 'projects.projecty.description',
        message:
          'TODO: Platzhalter für ein weiteres Projekt. Problem, Umsetzung und Ergebnis ergänzen.',
      }),
      image: 'img/projects/placeholder.svg',
      imageLabel: translate({
        id: 'projects.projecty.imageLabel',
        message: 'Platzhalterbild für Projekt Y',
      }),
      // TODO: add docs page and GitHub repo of project Y.
      docLink: undefined,
      githubLink: undefined,
    },
    {
      id: 'baby-tools-shop',
      title: 'Baby Tools Shop',
      category: 'backend',
      // Shown under "Weitere Projekte" (/projects), after the five featured slots.
      featured: false,
      tags: ['Python', 'Docker', 'Django'],
      description: translate({
        id: 'projects.babytools.description',
        message:
          'Ein Shop für Baby- und Kinderprodukte soll auch nach einem Neustart seine Daten behalten. Ich habe eine Full-Stack-Anwendung mit Python und Django gebaut, die mit SQLite läuft und über ein eigenes Docker-Setup mit Volume-Mapping betrieben wird. Ergebnis: ein dockerisierter Shop mit dauerhaft gespeicherten Daten.',
      }),
      image: 'img/projects/baby-tools-shop.svg',
      imageLabel: translate({
        id: 'projects.babytools.imageLabel',
        message: 'Vorschau des Projekts Baby Tools Shop',
      }),
      docLink: '/docs/baby-tools-shop',
      githubLink: 'https://github.com/NicoMeyerDev/Baby-Tools-World',
    },
    {
      id: 'wordpress',
      title: 'WordPress',
      category: 'devsecops',
      featured: false,
      tags: ['YAML', 'Shell scripting', 'IT Security'],
      description: translate({
        id: 'projects.wordpress.description',
        message:
          'Ein eigener WordPress-Server soll reproduzierbar und sicher laufen. Ich habe ihn mit Docker Compose, MySQL und phpMyAdmin aufgesetzt, Daten in Volumes gelegt und alle Zugangsdaten in eine .env-Datei ausgelagert. Ergebnis: ein Blog, der per Restart-Policy online bleibt, ohne Secrets im Repo.',
      }),
      image: 'img/projects/wordpress-server.svg',
      imageLabel: translate({
        id: 'projects.wordpress.imageLabel',
        message: 'Vorschau des Projekts WordPress-Server',
      }),
      docLink: '/docs/wordpress',
      githubLink: 'https://github.com/NicoMeyerDev/Wordpress_Server',
    },
    {
      id: 'minecraft-server',
      title: 'Minecraft Server',
      category: 'devsecops',
      featured: false,
      tags: ['YAML', 'Shell scripting', 'IT Security', 'Docker'],
      description: translate({
        id: 'projects.minecraft.description',
        message:
          'Ein Java-Server soll sich ohne manuelle Schritte einrichten und starten lassen. Ich habe ihn mit einem eigenen Dockerfile auf OpenJDK-Basis containerisiert und ein Entrypoint-Skript geschrieben, das Provisionierung, Konfiguration und Start automatisiert. Ergebnis: ein Server, der mit einem Befehl läuft.',
      }),
      image: 'img/projects/minecraft-server.svg',
      imageLabel: translate({
        id: 'projects.minecraft.imageLabel',
        message: 'Vorschau des Projekts Minecraft Server',
      }),
      docLink: '/docs/minecraft-server',
      // TODO: the GitHub repo is still named "Mincraft-Server" (typo). Rename it to
      // "Minecraft-Server" on GitHub (GitHub redirects the old URL), then this link works.
      githubLink: 'https://github.com/NicoMeyerDev/Minecraft-Server',
    },
  ];
}
