import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TagPill from '@site/src/components/tag-pill';
import Button from '@site/src/components/button';
import styles from './project-card.module.css';

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  image: string;
  imageLabel: string;
  docsUrl: string;
  repoUrl: string;
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
  Yaml: 'img/skills/yaml-dark.svg',
  YAML: 'img/skills/yaml-dark.svg',
  'Shell scripting': 'img/skills/shell.svg',
  Django: 'img/skills/django.svg',
  'Static site generator': 'img/skills/staticsite.svg',
};

export default function ProjectCard({
  title,
  tags,
  description,
  image,
  imageLabel,
  docsUrl,
  repoUrl,
}: ProjectCardProps): JSX.Element {
  const imageSrc = useBaseUrl(image);
  return (
    <article className={styles.projectCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} iconSrc={TAG_ICONS[tag]} />
          ))}
        </div>
      </div>
      <div className={styles.body}>
        <img className={styles.image} src={imageSrc} alt={imageLabel} />
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Button href={docsUrl} variant="primary">
              Documentation
            </Button>
            <Button href={repoUrl} variant="secondary">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
