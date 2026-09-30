import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import Header from '@site/src/components/header';
import Footer from '@site/src/components/footer';
import ProjectCard from '@site/src/components/project-card';
import {getProjects} from '@site/src/data/projects';
import styles from './projects.module.css';

type Filter = 'all' | 'backend' | 'devsecops';

export default function ProjectsPage(): JSX.Element {
  const [filter, setFilter] = useState<Filter>('all');
  const projects = getProjects();
  const visible = projects.filter(
    (project) => filter === 'all' || project.category === filter,
  );

  const filters: {id: Filter; label: string}[] = [
    {id: 'all', label: translate({id: 'projects.filter.all', message: 'Alle'})},
    {
      id: 'backend',
      label: translate({id: 'projects.filter.backend', message: 'Backend'}),
    },
    {
      id: 'devsecops',
      label: translate({id: 'projects.filter.devsecops', message: 'DevSecOps'}),
    },
  ];

  return (
    <Layout
      title={translate({id: 'projects.page.title', message: 'Projekte'})}
      description={translate({
        id: 'projects.page.description',
        message: 'Alle Projekte von Nico Meyer – Backend und DevSecOps.',
      })}>
      <Header />
      <main className={styles.page}>
        <div className="container">
          <h1 className={styles.heading}>
            <Translate id="projects.page.heading">Alle Projekte</Translate>
          </h1>
          <div
            className={styles.filters}
            role="group"
            aria-label={translate({
              id: 'projects.filter.label',
              message: 'Projekte filtern',
            })}>
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={clsx(
                  styles.filterButton,
                  filter === item.id && styles.filterButtonActive,
                )}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
          <div className={styles.list}>
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
