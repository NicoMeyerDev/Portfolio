import React from 'react';
import styles from './skill-card.module.css';

interface SkillCardProps {
  iconLabel: string;
  label: string;
  usage: string[];
}

export default function SkillCard({
  iconLabel,
  label,
  usage,
}: SkillCardProps): JSX.Element {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {/* TODO: replace this text badge with the real skill icon/SVG exported from Figma */}
          <div className={styles.icon}>{iconLabel}</div>
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
