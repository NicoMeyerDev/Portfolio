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
    id: 'git',
    icon: 'img/skills/git.svg',
    label: 'Git',
    usage: [
      'Used feature branches and pull requests',
      'Wrote clear, descriptive commit messages',
      'Resolved merge conflicts and used rebase',
    ],
  },
  {
    id: 'docker',
    icon: 'img/skills/docker.svg',
    label: 'Docker',
    usage: [
      'Containerized a project with a Dockerfile',
      'Built CI/CD pipelines around Docker images',
      'Automated builds, tests, and deploys',
    ],
  },
  {
    id: 'cicd',
    icon: 'img/skills/cicd.svg',
    label: 'CI/CD with GitHub Actions',
    usage: [
      'Automated builds and tests',
      'Used pre-built actions for common tasks',
      'Set up automatic deployment to [target] on push to main',
    ],
  },
  {
    id: 'python',
    icon: 'img/skills/python.svg',
    label: 'Python',
    usage: [
      'Built a project using Python',
      'Wrote scripts to automate tasks',
      'Built APIs',
    ],
  },
  {
    id: 'security',
    icon: 'img/skills/security.svg',
    label: 'IT Security',
    usage: [
      'Simulated attacks and identified vulnerabilities',
      'Set up multi-factor authentication',
      'Implemented authentication and authorization mechanisms',
    ],
  },
  {
    id: 'yaml',
    icon: 'img/skills/yaml.svg',
    label: 'YAML',
    usage: [
      'Wrote Kubernetes deployment manifests',
      'Wrote GitHub Actions / Docker Compose files',
      'Used lists and maps in complex configs',
    ],
  },
  {
    id: 'shell',
    icon: 'img/skills/shell.svg',
    label: 'Shell scripting',
    usage: [
      'Adding new users and setting their permissions',
      'Searching and filtering logs with grep and awk',
      'Hardening SSH access on a Linux server',
    ],
  },
  {
    id: 'django',
    icon: 'img/skills/django.svg',
    label: 'Django',
    usage: [
      'Built the project backend with Django',
      'Implemented user authentication and permissions',
      'Implemented feature views/templates for the project',
    ],
  },
  {
    id: 'static-site-generator',
    icon: 'img/skills/staticsite.svg',
    label: 'Static site generator',
    usage: [
      'Built this portfolio with Docusaurus',
      'Configured plugin/theme for the site',
      'Wrote technical documentation in Markdown',
    ],
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
