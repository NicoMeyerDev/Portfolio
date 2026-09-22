import React, {useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ProjectCard from '@site/src/components/project-card';
import styles from './project-highlights.module.css';

interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
  imageLabel: string;
  docsUrl: string;
  repoUrl: string;
}

// TODO: swap each `image` for the real project screenshot, e.g.
// 'img/projects/baby-tools-shop.png', once it's exported from Figma.
const PROJECTS: Project[] = [
  {
    id: 'baby-tools-shop',
    title: 'Baby Tools Shop',
    tags: ['Python', 'Docker', 'Django'],
    description:
    'A simple, full-stack, Dockerized shop application built with Python and Django. It uses SQLite as the database and runs behind a custom Docker setup, with volume mapping configured for persistent data storage.',
    image: 'img/projects/placeholder.svg',
    imageLabel: 'Baby Tools Shop',
    docsUrl: '/docs/baby-tools-shop',
    repoUrl: '#',
  },
  {
    id: 'conduit-container',
    title: 'Conduit Container',
    tags: ['Yaml', 'Shell scripting', 'Docker'],
    description:
      'An automated CI/CD workflow powered by GitHub ' +
      'Actions and the GitHub Container Registry. ' +
      'The pipeline is divided into three sequential stages: building the application, preparing the configuration, and deploying the project remotely through SSH.',
    image: 'img/projects/placeholder.svg',
    imageLabel: 'Conduit Container',
    docsUrl: '/docs/conduit-container',
    repoUrl: '#',
  },
  {
    id: 'conduit-deployment',
    title: 'Conduit Deployment',
    tags: ['Yaml', 'Shell scripting', 'IT Security'],
    description:
      'A fully Dockerized and automated CI/CD workflow powered by GitHub Actions and the GitHub Container Registry. ' +
      'The pipeline consists of three sequential stages responsible for building the application, preparing the required configuration, and deploying it remotely via SSH.',
    image: 'img/projects/placeholder.svg',
    imageLabel: 'Conduit Deployment',
    docsUrl: '/docs/conduit-deployment',
    repoUrl: '#',
  },
  {
    id: 'juice-shop-master',
    title: 'Juice Shop Master',
    tags: ['IT Security', 'Docker'],
    description:
      'OWASP Juice Shop vulnerability writeups covering SQL injection, exposed password hashes, authentication flaws, ' +
      'and other common web security issues. The project demonstrates real-world vulnerabilities and provides practical insights into identifying and preventing them.',
    image: 'img/projects/placeholder.svg',
    imageLabel: 'Juice Shop Master',
    docsUrl: '/docs/juice-shop-master',
    repoUrl: '#',
  },
  {
    id: 'minecraft-server',
    title: 'Minecraft Server',
    tags: ['Yaml', 'Shell scripting', 'IT Security', 'Docker'],
    description:
      'A containerized, Java-based Minecraft server deployment built from a custom Dockerfile using an OpenJDK base image. ' +
      'An entrypoint script automates runtime initialization, server provisioning, configuration, and startup.',
    image: 'img/projects/placeholder.svg',
    imageLabel: 'Minecraft Server',
    docsUrl: '/docs/minecraft-server',
    repoUrl: '#',
  },
];

export default function ProjectHighlights(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  // Resolve a site-root-relative path against the configured baseUrl (e.g.
  // "/Portfolio/"), so links work both locally and on GitHub Pages.
  const withBase = (path: string): string =>
    `${siteConfig.baseUrl}${path.replace(/^\//, '')}`;

  return (
    <section id="projects" className={styles.projectHighlights}>
      <div className="container">
        <h2 className={styles.heading}>My project highlights</h2>

        <div className={styles.desktopLayout}>
          <div className={styles.listWrapper}>
            <ol className={styles.list}>
              {PROJECTS.map((project, index) => (
                <li key={project.id}>
                  <button
                    type="button"
                    className={clsx(
                      styles.listItem,
                      project.id === activeId && styles.listItemActive,
                    )}
                    onClick={() => setActiveId(project.id)}>
                    {index + 1}. {project.title}
                  </button>
                </li>
              ))}
            </ol>
            <a className={styles.seeMore} href={withBase('/docs')}>
              see more projects
            </a>
          </div>
          <div className={styles.activeCard}>
            <ProjectCard
              title={activeProject.title}
              tags={activeProject.tags}
              description={activeProject.description}
              image={activeProject.image}
              imageLabel={activeProject.imageLabel}
              docsUrl={withBase(activeProject.docsUrl)}
              repoUrl={activeProject.repoUrl}
            />
          </div>
        </div>

        {/* Mobile: show every project stacked instead of the list+card layout */}
        <div className={styles.mobileList}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tags={project.tags}
              description={project.description}
              image={project.image}
              imageLabel={project.imageLabel}
              docsUrl={withBase(project.docsUrl)}
              repoUrl={project.repoUrl}
            />
          ))}
          <a className={styles.seeMore} href={withBase('/docs')}>
            see more projects
          </a>
        </div>
      </div>
    </section>
  );
}
