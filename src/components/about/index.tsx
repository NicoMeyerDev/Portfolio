import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './about.module.css';

// TODO: the three paragraphs repeat parts of the hero text; tighten and refine them later.
export default function About(): JSX.Element {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.heading}>
          <Translate id="about.heading">Über mich</Translate>
        </h2>
      </div>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.story}>
          <p>
            <Translate id="about.p1">
              Neben meinem Dienst bei der Bundeswehr habe ich mich nebenberuflich in der IT weitergebildet. Mich treibt an, mein Wissen stetig zu erweitern und die Qualität meiner Arbeit kontinuierlich zu verbessern.
            </Translate>
          </p>
          <p>
            <Translate id="about.p2">
              Mein Weg begann 2025 mit einem E-Training zum Data-Analyst (Python), 2026 folgte der Kurs Python Grundlagen bei der Technischen Akademie Nord. Anschließend habe ich bei der Developer Akademie die Weiterbildung zum Softwareentwickler mit Schwerpunkt Back-End abgeschlossen: 13 Module und vier Capstone-Projekte, darunter Coderr und Quizzly.
            </Translate>
          </p>
          <p>
            <Translate id="about.p3">
              Aktuell mache ich die Weiterbildung zum DevSecOps Engineer, die ich im Oktober 2026 abschließe. Dort vertiefe ich CI/CD mit GitHub Actions, Container-Orchestrierung, IT-Security und Linux-Infrastruktur.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}
