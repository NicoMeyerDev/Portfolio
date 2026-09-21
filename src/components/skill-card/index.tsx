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
    <div className={styles.skillCard}>
      {/* TODO: replace this text badge with the real skill icon/SVG exported from Figma */}
      <div className={styles.icon}>{iconLabel}</div>
      <p className={styles.label}>{label}</p>
      {/* TODO: hide this list by default and reveal it on hover ("How I used this skill") */}
      <ul className={styles.usage}>
        {usage.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
