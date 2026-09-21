import React from 'react';
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
    id: 'minecraft',
    title: '1. Minecraft',
    tags: ['Yaml', 'Shell scripting', 'IT Security', 'Container'],
    description:
      'Write some information about the project. For example: Why are ' +
      'you proud of it? What were you able to implement here? What ' +
      'different algorithms, server architecture did you use? Why did ' +
      'you find this project so interesting?',
    imageLabel: 'Minecraft',
    docsUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'conduit',
    title: '2. Conduit (Container)',
    tags: ['Yaml', 'Shell scripting', 'IT Security', 'Container'],
    description:
      'Write some information about the project. For example: Why are ' +
      'you proud of it? What were you able to implement here? What ' +
      'different algorithms, server architecture did you use? Why did ' +
      'you find this project so interesting?',
    imageLabel: 'Conduit',
    docsUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'wordpress',
    title: '3. WordPress hosten',
    tags: ['Yaml', 'Shell scripting', 'IT Security', 'Container'],
    description:
      'Write some information about the project. For example: Why are ' +
      'you proud of it? What were you able to implement here? What ' +
      'different algorithms, server architecture did you use? Why did ' +
      'you find this project so interesting?',
    imageLabel: 'WordPress',
    docsUrl: '#',
    repoUrl: '#',
  },
];

export default function ProjectHighlights(): JSX.Element {
  return (
    <section id="projects" className={styles.projectHighlights}>
      <div className="container">
        <h2 className={styles.heading}>My project highlights</h2>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tags={project.tags}
              description={project.description}
              imageLabel={project.imageLabel}
              docsUrl={project.docsUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
        {/* TODO: link to a real "all projects" page once one exists */}
        <a className={styles.seeMore} href="#">
          ↳ see more projects
        </a>
      </div>
    </section>
  );
}
