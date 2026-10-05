import React, {useState} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ProjectCard from '@site/src/components/project-card';
import {getProjects} from '@site/src/data/projects';
import styles from './project-highlights.module.css';

const MAX_FEATURED = 5;

export default function ProjectHighlights(): JSX.Element {
  const featured = getProjects()
    .filter((project) => project.featured)
    .slice(0, MAX_FEATURED);
  const [activeId, setActiveId] = useState(featured[0]?.id);
  const activeProject =
    featured.find((project) => project.id === activeId) ?? featured[0];
  const projectsUrl = useBaseUrl('/projects');

  return (
    <section id="projects" className={styles.projectHighlights}>
      <div className="container">
        <h2 className={styles.heading}>
          <Translate id="projects.heading">Meine Projekt-Highlights</Translate>
        </h2>

        <div className={styles.desktopLayout}>
          <div className={styles.listWrapper}>
            <ol className={styles.list}>
              {featured.map((project, index) => (
                <li key={project.id}>
                  <button
                    type="button"
                    className={clsx(
                      styles.listItem,
                      project.id === activeProject.id && styles.listItemActive,
                    )}
                    aria-pressed={project.id === activeProject.id}
                    onClick={() => setActiveId(project.id)}>
                    {index + 1}. {project.title}
                  </button>
                </li>
              ))}
            </ol>
            <a className={styles.seeMore} href={projectsUrl}>
              <Translate id="projects.seeMore">Weitere Projekte</Translate>
            </a>
          </div>
          <div className={styles.activeCard}>
            {activeProject && <ProjectCard project={activeProject} />}
          </div>
        </div>

        {/* Mobile: show every featured project stacked instead of the list+card layout */}
        <div className={styles.mobileList}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <a className={styles.seeMore} href={projectsUrl}>
            <Translate id="projects.seeMore">Weitere Projekte</Translate>
          </a>
        </div>

      </div>
    </section>
  );
}
