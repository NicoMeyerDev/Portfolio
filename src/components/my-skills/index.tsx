import React from 'react';
import clsx from 'clsx';
import SkillCard from '@site/src/components/skill-card';
import styles from './my-skills.module.css';

interface SkillItem {
  id: string;
  icon: string;
  label: string;
  usage: string[];
}

// Order here = render order (3 per row, left to right, top to bottom).
const SKILLS: SkillItem[] = [
  {
    id: 'ssh',
    icon: 'img/skills/ssh.svg',
    label: 'SSH',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'docker',
    icon: 'img/skills/docker.svg',
    label: 'Docker',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'cicd',
    icon: 'img/skills/cicd.svg',
    label: 'CI/CD with GitHub Actions',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'python',
    icon: 'img/skills/python.svg',
    label: 'Python',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'security',
    icon: 'img/skills/security.svg',
    label: 'IT Security',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'yaml',
    icon: 'img/skills/yaml.svg',
    label: 'YAML',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'shell',
    icon: 'img/skills/shell.svg',
    label: 'Shell scripting',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'django',
    icon: 'img/skills/django.svg',
    label: 'Django',
    usage: ['Describe how you used this skill'],
  },
  {
    id: 'static-site-generator',
    icon: 'img/skills/staticsite.svg',
    label: 'Static site generator',
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
                icon={skill.icon}
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
