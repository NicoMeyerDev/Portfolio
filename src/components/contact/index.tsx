import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {CONTACT_EMAIL, LINKEDIN_URL} from '@site/src/data/profile';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  const mailIconSrc = useBaseUrl('img/mail-icon.svg');
  const linkedInIconSrc = useBaseUrl('img/linkedin-icon.svg');

  return (
    <section id="contact" className={styles.contact}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.text}>
          <h2 className={styles.heading}>
            <Translate id="contact.heading">Kontakt</Translate>
          </h2>
          <p>
            <Translate id="contact.intro">
              Hier steht, wonach ich suche und was ich mitbringe:
            </Translate>
          </p>
          <ul>
            <li>
              <Translate id="contact.role">
                Rolle: Ich suche eine Stelle als Junior DevSecOps Engineer oder Backend Developer und bin auch offen für ein duales Informatikstudium.
              </Translate>
            </li>
            <li>
              <Translate id="contact.contribution">
                Beitrag: Nach 9 Jahren als Feldwebel bei der Bundeswehr bringe ich Führungsstärke, Zuverlässigkeit und einen kühlen Kopf unter Druck mit, dazu praktische Kenntnisse in Docker, CI/CD, Linux und Python.
              </Translate>
            </li>
            <li>
              <Translate id="contact.remote">
                Remote: Ich suche Stellen vor Ort oder hybrid im Raum Hamburg/Bremen und bin offen für Remote-Arbeit in ganz Deutschland.
              </Translate>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <p className={styles.lookingForward}>
            <Translate id="contact.lookingForward">
              Ich freue mich auf Ihre Nachricht!
            </Translate>
          </p>
          <a className={styles.linkItem} href={`mailto:${CONTACT_EMAIL}`}>
            <img
              className={styles.linkIcon}
              src={mailIconSrc}
              alt={translate({id: 'contact.mailIconAlt', message: 'E-Mail-Symbol'})}
            />
            {CONTACT_EMAIL}
          </a>

          <a
            className={clsx(styles.linkItem, styles.profileLink)}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer">
            <img
              className={styles.linkIcon}
              src={linkedInIconSrc}
              alt={translate({id: 'contact.linkedinIconAlt', message: 'LinkedIn-Logo'})}
            />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
