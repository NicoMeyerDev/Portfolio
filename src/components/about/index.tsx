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
              Seit mehreren Jahren diene ich bei der Bundeswehr und trage dort Verantwortung für Menschen: Ich führe, bilde aus und bereite sie auf ihren Einsatz vor. Diese Aufgabe hat mich gelehrt, strukturiert zu arbeiten, Verantwortung zu übernehmen und auch in komplexen Situationen den Überblick zu behalten. Mit der Zeit wurde mir klar: Ich möchte nicht nur bestehende Abläufe steuern, sondern selbst etwas entwickeln und verbessern.
            </Translate>
          </p>
          <p>
            <Translate id="about.p2">
              Aus diesem Anspruch entstand mein Weg in die IT. Neben dem Dienst habe ich mich über ein Jahr intensiv weitergebildet, mit Schwerpunkt auf Backend-Entwicklung mit Python und Django, ergänzt durch DevSecOps. Mir war dabei wichtig, Gelerntes sofort anzuwenden: In eigenen Projekten habe ich aus Wissen funktionierende Anwendungen gemacht.
            </Translate>
          </p>
          <p>
            <Translate id="about.p3">
              Heute ist mein Ziel klar: Probleme verstehen und konkrete Lösungen bauen. Prozesse zu vereinfachen, zu digitalisieren und zu automatisieren ist für mich mehr als Technik, es ist die Möglichkeit, Dinge nachhaltig besser zu machen. Die Verantwortung und Struktur aus meiner bisherigen Laufbahn bringe ich dabei mit.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}
