import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './about.module.css';

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
              Als ausgebildeter Kfz-Mechatroniker und ehemaliger Feldwebel habe ich neun Jahre bei der Bundeswehr mit komplexen Systemen gearbeitet, Verantwortung übernommen und Probleme unter Druck gelöst.
            </Translate>
          </p>
          <p>
            <Translate id="about.p2">
              Diese Erfahrung bringe ich heute in die Softwareentwicklung ein, mit Schwerpunkt auf Backend-Entwicklung und DevSecOps. Ich baue containerisierte Anwendungen mit Docker, automatisiere Deployments mit CI/CD und verstehe Sicherheit als festen Teil des Entwicklungsprozesses.
            </Translate>
          </p>
          <p>
            <Translate id="about.p3">
              Der Wechsel in die IT ist für mich kein Neuanfang, sondern der nächste Schritt auf dem, was ich bereits gelernt habe: Ich wende es auf eine neue Art von komplexem System an. Ich lerne laufend weiter, baue echte Projekte und erweitere meine Fähigkeiten in einem Feld, das nie stillsteht.
            </Translate>
          </p>
        </div>
        <div className={styles.facts}>
          <h3 className={styles.factsHeading}>
            <Translate id="about.education.heading">
              Ausbildung / Weiterbildung
            </Translate>
          </h3>
          <ul>
            <li>
              {/* TODO: add the exact period and course title. */}
              <strong>Developer Akademie</strong>
              {' – '}
              <Translate id="about.education.developerAkademie">
                Weiterbildung zum Backend Developer und DevSecOps Engineer (Zeitraum folgt)
              </Translate>
            </li>
          </ul>
          <h3 className={styles.factsHeading}>
            <Translate id="about.languages.heading">Sprachen</Translate>
          </h3>
          <ul>
            {/* TODO: add the language levels (e.g. C1 / B2). */}
            <li>
              <Translate id="about.languages.german">Deutsch</Translate>
              {' – '}
              <Translate id="about.languages.levelTodo">Niveau folgt</Translate>
            </li>
            <li>
              <Translate id="about.languages.english">Englisch</Translate>
              {' – '}
              <Translate id="about.languages.levelTodo">Niveau folgt</Translate>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
