import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import type {Skill} from '@site/src/data/skills';
import styles from './skill-card.module.css';

interface SkillCardProps {
  skill: Skill;
}

// Static card: icon, name and the bullets are all visible at once (no hover
// or tap needed), so it reads the same on desktop and touch devices.
export default function SkillCard({skill}: SkillCardProps): JSX.Element {
  const iconSrc = useBaseUrl(skill.icon);
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span className={clsx(styles.iconWrap, skill.lightChip && styles.iconChip)}>
          <img
            className={styles.icon}
            src={iconSrc}
            alt={translate(
              {id: 'skills.iconAlt', message: '{label}-Symbol'},
              {label: skill.label},
            )}
          />
        </span>
        <h4 className={styles.label}>{skill.label}</h4>
      </div>
      <ul className={styles.usage}>
        {skill.usage.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
