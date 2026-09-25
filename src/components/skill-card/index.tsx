import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './skill-card.module.css';

interface SkillCardProps {
  icon: string;
  label: string;
  usage: string[];
}

export default function SkillCard({
  icon,
  label,
  usage,
}: SkillCardProps): JSX.Element {
  const iconSrc = useBaseUrl(icon);
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img className={styles.icon} src={iconSrc} alt={`${label} icon`} />
          <p className={styles.label}>{label}</p>
        </div>
        <div className={styles.flipCardBack}>
          <p className={styles.backHeading}>How I used this skill</p>
          <ul className={styles.usage}>
            {usage.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
