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
              Nach meiner Ausbildung zum Kfz-Mechatroniker habe ich neun Jahre bei der Bundeswehr gedient, zuletzt als Hauptfeldwebel mit Führungsverantwortung. Dabei habe ich gelernt, auch unter Zeitdruck strukturiert zu arbeiten, Verantwortung zu übernehmen und mich schnell in komplexe technische Themen einzuarbeiten.
            </Translate>
          </p>
          <p>
            <Translate id="about.p2">
              Parallel zu meinem Dienst habe ich angefangen, mich intensiv mit der IT zu beschäftigen. Was zunächst mit Python und Data Analytics begann, hat sich schnell in Richtung Softwareentwicklung entwickelt. Heute liegt mein Schwerpunkt auf Backend-Entwicklung mit Python und Django. Dabei beschäftige ich mich zunehmend auch mit Themen wie Docker, CI/CD, Linux und IT-Security.
            </Translate>
          </p>
          <p>
            <Translate id="about.p3">
              Aktuell vertiefe ich mein Wissen im Bereich DevSecOps und arbeite parallel an meinem eigenen Projekt Taktix. Dabei entwickle ich eine Fußball-Trainer-App, die den Traineralltag digitalisieren und Aufgaben wie Aufstellungsplanung und taktische Anweisungen einfacher und übersichtlicher machen soll.
            </Translate>
          </p>
          <p>
            <Translate id="about.p4">
              Für mich ist der Wechsel in die IT kein kompletter Neuanfang, sondern der nächste Schritt. Ich bringe Erfahrung, technische Neugier und die Bereitschaft mit, mich ständig weiterzuentwickeln. Mein Anspruch ist dabei nicht, möglichst viele Technologien zu kennen, sondern Dinge wirklich zu verstehen und mit ihnen funktionierende Lösungen zu bauen.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}
