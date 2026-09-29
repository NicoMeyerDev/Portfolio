import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TagPill from '@site/src/components/tag-pill';
import Button from '@site/src/components/button';
import type {Project} from '@site/src/data/projects';
import styles from './project-card.module.css';

interface ProjectCardProps {
  project: Project;
}

// Reuses the same icon set as the My Skills cards, so a tag here always
// matches the icon shown on its corresponding skill card.
const TAG_ICONS: Record<string, string> = {
  Git: 'img/skills/git.svg',
  Docker: 'img/skills/docker.svg',
  'CI/CD with GitHub Actions': 'img/skills/cicd.svg',
  Python: 'img/skills/python.svg',
  'IT Security': 'img/skills/security.svg',
  // Dark-lettered variant: the white "YAML" letters of the skill icon would
  // disappear on the white tag pill.
  YAML: 'img/skills/yaml-dark.svg',
  'Shell scripting': 'img/skills/shell.svg',
  Django: 'img/skills/django.svg',
  'Static site generator': 'img/skills/staticsite.svg',
};

export default function ProjectCard({project}: ProjectCardProps): JSX.Element {
  const imageSrc = useBaseUrl(project.image);
  const docsUrl = useBaseUrl(project.docLink);
  const badgeLabel =
    project.category === 'backend'
      ? translate({id: 'projects.badge.backend', message: 'Backend'})
      : translate({id: 'projects.badge.devsecops', message: 'DevSecOps'});

  return (
    <article className={styles.projectCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <span
          className={clsx(
            styles.badge,
            project.category === 'backend'
              ? styles.badgeBackend
              : styles.badgeDevsecops,
          )}>
          {badgeLabel}
        </span>
      </div>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <TagPill key={tag} label={tag} iconSrc={TAG_ICONS[tag]} />
        ))}
      </div>
      <div className={styles.body}>
        <img
          className={styles.image}
          src={imageSrc}
          alt={project.imageLabel}
        />
        <div className={styles.content}>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.actions}>
            {project.docLink && (
              <Button href={docsUrl} variant="primary">
                <Translate id="projects.card.docs">Dokumentation</Translate>
              </Button>
            )}
            {project.githubLink && (
              <Button href={project.githubLink} variant="secondary" external>
                GitHub
              </Button>
            )}
            {project.liveLink && (
              <Button href={project.liveLink} variant="light" external>
                <Translate id="projects.card.live">Live-Link</Translate>
              </Button>
            )}
            {!project.docLink && !project.githubLink && !project.liveLink && (
              <span className={styles.comingSoon}>
                <Translate id="projects.card.comingSoon">
                  Links folgen
                </Translate>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
