import React from 'react';
import clsx from 'clsx';
import SkillCard from '@site/src/components/skill-card';
import styles from './my-skills.module.css';

interface SkillItem {
  id: string;
  iconLabel: string;
  label: string;
  usage: string[];
}

const SKILLS: SkillItem[] = [
  {
    id: 'html',
    iconLabel: 'HTML',
    label: 'HTML',
    usage: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    id: 'css',
    iconLabel: 'CSS',
    label: 'CSS',
    usage: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    id: 'static-site',
    iconLabel: 'SSG',
    label: 'Static site generator',
    usage: [
      'search functionality',
      'static website and customization',
      'tags, categories and RSS feeds',
      'translation',
    ],
  },
  {
    id: 'python',
    iconLabel: 'PY',
    label: 'Python',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'shell',
    iconLabel: 'SH',
    label: 'Shell scripting',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'yaml',
    iconLabel: 'YAML',
    label: 'Yaml',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'container',
    iconLabel: 'DOCK',
    label: 'Container',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'cicd',
    iconLabel: 'CI/CD',
    label: 'CI/CD with GitHub Actions',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'security',
    iconLabel: 'SEC',
    label: 'IT Security',
    usage: ['Describe how you used this skill'],
  },
];

export default function MySkills(): JSX.Element {
  return (
    <section id="skills" className={styles.mySkills}>
      <div className="container">
        <h2 className={styles.heading}>My skills</h2>
        {/* TODO: mobile slider with dot indicator instead of a static grid */}
        <div className={clsx('row', styles.grid)}>
          {SKILLS.map((skill) => (
            <div key={skill.id} className={clsx('col col--4', styles.gridItem)}>
              <SkillCard
                iconLabel={skill.iconLabel}
                label={skill.label}
                usage={skill.usage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
