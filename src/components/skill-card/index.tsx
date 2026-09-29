import React, {useState} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './skill-card.module.css';

interface SkillCardProps {
  icon: string;
  label: string;
  usage: string[];
  // Dark logos need a light chip behind them to stay readable on the gray card.
  lightChip?: boolean;
}

export default function SkillCard({
  icon,
  label,
  usage,
  lightChip = false,
}: SkillCardProps): JSX.Element {
  const iconSrc = useBaseUrl(icon);
  // Tap/click toggle so the details are reachable on touch devices, where
  // :hover doesn't exist. Hover still flips the card on desktop.
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={clsx(styles.flipCard, flipped && styles.flipped)}
      aria-expanded={flipped}
      aria-label={`${label}: how I used this skill`}
      onClick={() => setFlipped((value) => !value)}>
      <span className={styles.flipCardInner}>
        <span className={styles.flipCardFront}>
          <span className={clsx(styles.iconWrap, lightChip && styles.iconChip)}>
            <img className={styles.icon} src={iconSrc} alt="" />
          </span>
          <span className={styles.label}>{label}</span>
        </span>
        <span className={styles.flipCardBack}>
          <span className={styles.backHeading}>How I used this skill</span>
          <ul className={styles.usage}>
            {usage.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </span>
      </span>
    </button>
  );
}
