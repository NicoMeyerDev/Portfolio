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
          'Trainer planen Training und Spieltag oft noch mit Zetteln und Chat-Gruppen. Taktix ist meine eigene Backend-Anwendung, die Kaderverwaltung, Trainingsplanung, Spieltagsvorbereitung und Aufstellung in sechs Modulen bündelt und den Organisationsaufwand reduziert. Derzeit in der Beta-Phase, getestet mit echten Trainern.',
      }),
      image: 'img/projects/taktix.png',
      imageLabel: translate({
        id: 'projects.taktix.imageLabel',
        message: 'Screenshot der Taktix-Anmeldeseite vor einem Spielplan in der Kabine',
      }),
      docLink: '/docs/taktix',
      githubLink: 'https://github.com/NicoMeyerDev/matchday-app',
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
      githubLink: 'https://github.com/NicoMeyerDev/dev-blog/tree/main/docs/Juice-Shop-Master',
    },
    {
      id: 'videoflix',
      title: 'Videoflix',
      category: 'backend',
      featured: true,
      tags: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      description: translate({
        id: 'projects.videoflix.description',
        message:
          'Videoflix ist ein containerisiertes Streaming-Backend nach dem Vorbild moderner Streaming-Plattformen. Hochgeladene Videos werden im Hintergrund mit ffmpeg in mehrere Auflösungen (480p, 720p, 1080p) für adaptives HLS-Streaming umgewandelt. Registrierung mit E-Mail-Aktivierung und JWT-Login über HttpOnly-Cookies sind eingebaut.',
      }),
      image: 'img/projects/videoflix.png',
      imageLabel: translate({
        id: 'projects.videoflix.imageLabel',
        message: 'Vorschau der Videoflix-Startseite mit Videoauswahl nach Kategorien',
      }),
      docLink: '/docs/videoflix',
      githubLink: 'https://github.com/NicoMeyerDev/Videoflix',
    },
    {
      id: 'quizzly',
      title: 'Quizzly',
      category: 'backend',
      featured: true,
      tags: ['Python', 'Django'],
      description: translate({
        id: 'projects.quizzly.description',
        message:
          'Mit Quizly verwandelst du YouTube-Videos in interaktive Quizze: Die App analysiert das Video mit KI und erstellt automatisch 10 Fragen. Ich habe das Backend mit Python, Django und Django REST Framework gebaut, mit JWT-Authentifizierung und Anbindung von Sprachmodellen (LLMs).',
      }),
      image: 'img/projects/quizzly.png',
      imageLabel: translate({
        id: 'projects.quizzly.imageLabel',
        message: 'Vorschau der Quizzly-Oberfläche mit Eingabefeld für eine Video-URL und Übersicht der letzten Quizze',
      }),
      docLink: '/docs/quizzly',
      githubLink: 'https://github.com/NicoMeyerDev/quizzly-backend',
    },
    {
      id: 'coderr',
      title: 'Coderr',
      category: 'backend',
      featured: false,
      tags: ['Python', 'Django', 'PostgreSQL'],
      description: translate({
        id: 'projects.coderr.description',
        message:
          'Coderr ist eine Plattform, auf der Anbieter Angebote erstellen und Kunden diese in Anspruch nehmen können. Ich habe das Backend mit Python, Django und Django REST Framework gebaut, inklusive Benutzerverwaltung, Authentifizierung und PostgreSQL-Datenbank.',
      }),
      image: 'img/projects/coderr.png',
      imageLabel: translate({
        id: 'projects.coderr.imageLabel',
        message: 'Platzhalterbild für das Projekt Coderr',
      }),
      docLink: '/docs/coderr',
      
      githubLink: 'https://github.com/NicoMeyerDev/coderr-Backend',
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
      githubLink: 'https://github.com/NicoMeyerDev/Minecraft-Server',
    },
  ];
}
