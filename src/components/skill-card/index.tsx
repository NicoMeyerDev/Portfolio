import React, {useState} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import type {Skill} from '@site/src/data/skills';
import styles from './skill-card.module.css';

interface SkillCardProps {
  skill: Skill;
}

// Flip card: the front shows the icon and name, the back the bullets.
// Hover flips it on desktop, tap/click toggles it (also on touch devices).
export default function SkillCard({skill}: SkillCardProps): JSX.Element {
  const iconSrc = useBaseUrl(skill.icon);
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx(styles.flipCard, flipped && styles.flipped)}
      aria-expanded={flipped}
      aria-label={translate(
        {id: 'skills.cardLabel', message: '{label}: so habe ich die Fähigkeit eingesetzt'},
        {label: skill.label},
      )}
      onClick={() => setFlipped((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setFlipped((value) => !value);
        }
      }}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
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
          <span className={styles.label}>{skill.label}</span>
          <span className={styles.hint}>
            <Translate id="skills.flipHint">Tippen zum Umdrehen</Translate>
          </span>
        </div>
        <div className={styles.flipCardBack}>
          <span className={styles.backHeading}>
            <Translate id="skills.backHeading">So habe ich es eingesetzt</Translate>
          </span>
          <ul className={styles.usage}>
            {skill.usage.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
