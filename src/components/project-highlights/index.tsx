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
  imageLabel: string;
  docsUrl: string;
  repoUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 'baby-tools-shop',
    title: 'Baby Tools Shop',
    tags: ['Python', 'Docker', 'Django'],
    description:
      'A simple, full-stack, Dockerized shop application built with ' +
      'Python and Django. It uses SQLite as the database and runs ' +
      'behind a custom Docker setup, with volume mapping configured ' +
      'for persistent data storage.',
    imageLabel: 'Baby Tools Shop',
    docsUrl: '/docs/baby-tools-shop',
    repoUrl: '#',
  },
  {
    id: 'conduit-container',
    title: 'Conduit Container',
    tags: ['Yaml', 'Shell scripting', 'Container'],
    description:
      'Write some information about the project. For example: Why are ' +
      'you proud of it? What were you able to implement here? What ' +
      'different algorithms, server architecture did you use?',
    imageLabel: 'Conduit Container',
    docsUrl: '/docs/conduit-container',
    repoUrl: '#',
  },
  {
    id: 'conduit-deployment',
    title: 'Conduit Deployment',
    tags: ['Yaml', 'Shell scripting', 'IT Security'],
    description:
      'Write some information about the project. For example: Why are ' +
      'you proud of it? What were you able to implement here? What ' +
      'different algorithms, server architecture did you use?',
    imageLabel: 'Conduit Deployment',
    docsUrl: '/docs/conduit-deployment',
    repoUrl: '#',
  },
  {
    id: 'juice-shop-master',
    title: 'Juice Shop Master',
    tags: ['IT Security', 'Container'],
    description:
      'Write some information about the project. For example: Why are ' +
      'you proud of it? What were you able to implement here? What ' +
      'different algorithms, server architecture did you use?',
    imageLabel: 'Juice Shop Master',
    docsUrl: '/docs/juice-shop-master',
    repoUrl: '#',
  },
  {
    id: 'minecraft-server',
    title: 'Minecraft Server',
    tags: ['Yaml', 'Shell scripting', 'IT Security', 'Container'],
    description:
      'Write some information about the project. For example: Why are ' +
      'you proud of it? What were you able to implement here? What ' +
      'different algorithms, server architecture did you use?',
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
              ↳ see more projects
            </a>
          </div>
          <div className={styles.activeCard}>
            <ProjectCard
              title={activeProject.title}
              tags={activeProject.tags}
              description={activeProject.description}
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
              imageLabel={project.imageLabel}
              docsUrl={withBase(project.docsUrl)}
              repoUrl={project.repoUrl}
            />
          ))}
          <a className={styles.seeMore} href={withBase('/docs')}>
            ↳ see more projects
          </a>
        </div>
      </div>
    </section>
  );
}
