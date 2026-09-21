import React from 'react';
import TagPill from '@site/src/components/tag-pill';
import Button from '@site/src/components/button';
import styles from './project-card.module.css';

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  imageLabel: string;
  docsUrl: string;
  repoUrl: string;
}

export default function ProjectCard({
  title,
  tags,
  description,
  imageLabel,
  docsUrl,
  repoUrl,
}: ProjectCardProps): JSX.Element {
  return (
    <article className={styles.projectCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      </div>
      {/* TODO: replace with the real project screenshot exported from Figma */}
      <div className={styles.imagePlaceholder} role="img" aria-label={imageLabel}>
        {imageLabel}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <Button href={docsUrl} variant="primary">
          Documentation
        </Button>
        <Button href={repoUrl} variant="secondary">
          GitHub
        </Button>
      </div>
    </article>
  );
}
