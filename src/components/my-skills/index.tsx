import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import SkillCard from '@site/src/components/skill-card';
import {getSkillGroups} from '@site/src/data/skills';
import styles from './my-skills.module.css';

export default function MySkills(): JSX.Element {
  const groups = getSkillGroups();
  return (
    <section id="skills" className={styles.mySkills}>
      <div className="container">
        <h2 className={styles.heading}>
          <Translate id="skills.heading">Meine Skills</Translate>
        </h2>
        {groups.map((group) => (
          <div key={group.id} className={styles.group}>
            <h3 className={styles.groupHeading}>{group.title}</h3>
            <div className={clsx('row', styles.grid)}>
              {group.skills.map((skill) => (
                <div
                  key={skill.id}
                  className={clsx('col col--12', styles.gridItem)}>
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
