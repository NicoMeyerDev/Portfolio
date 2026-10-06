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
              Seit neun Jahren bin ich Soldat, zuletzt als Hauptfeldwebel mit Führungsverantwortung für bis zu 50 Soldaten, die ich ausgebildet und auf ihren Einsatz vorbereitet habe. Dabei habe ich gelernt, strukturiert zu arbeiten, Entscheidungen zu treffen und in komplexen Situationen den Überblick zu behalten. Gleichzeitig habe ich erlebt, wie viel Zeit langsame, papierbasierte Abläufe kosten, und wollte sie nicht nur verwalten, sondern mit Software besser machen.
            </Translate>
          </p>
          <p>
            <Translate id="about.p2">
              So begann mein Weg in die IT. Parallel zu meinem Dienst habe ich mich über ein Jahr intensiv weitergebildet, unter anderem bei der Developer Akademie. Mein Schwerpunkt lag auf der Backend-Entwicklung mit Python und Django, ergänzt durch DevSecOps. Entscheidend war für mich, das Gelernte nicht nur theoretisch aufzunehmen, sondern direkt anzuwenden. In eigenen Projekten wie Taktix, einer Anwendung für Fußballtrainer, habe ich daraus funktionierende Software entwickelt.
            </Translate>
          </p>
          <p>
            <Translate id="about.p3">
              Heute möchte ich Backends entwickeln, die stabil, sicher und wartbar sind, und Abläufe automatisieren, die im Alltag unnötig Zeit kosten. Das technische Fundament bringe ich aus Weiterbildung und Projekten mit, die Erfahrung in Führung und Verantwortung aus meiner bisherigen Laufbahn.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}
