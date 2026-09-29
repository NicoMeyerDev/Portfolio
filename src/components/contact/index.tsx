import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Button from '@site/src/components/button';
import {
  CONTACT_EMAIL,
  CV_DOWNLOAD_NAME,
  CV_PATH,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@site/src/data/profile';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  const mailIconSrc = useBaseUrl('img/mail-icon.svg');
  const linkedInIconSrc = useBaseUrl('img/linkedin-icon.svg');
  const gitHubIconSrc = useBaseUrl('img/github-icon.svg');
  const cvHref = useBaseUrl(CV_PATH);

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>
          <Translate id="contact.heading">Kontakt</Translate>
        </h2>
      </div>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.text}>
          <h3 className={styles.subheading}>
            <Translate id="contact.looking.heading">Was ich suche</Translate>
          </h3>
          <ul>
            <li>
              <strong>
                <Translate id="contact.role.label">Rolle:</Translate>
              </strong>{' '}
              <Translate id="contact.role.text">
                Ich suche eine Stelle als Junior DevSecOps Engineer oder Backend Developer und bin auch offen für ein duales Informatikstudium.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="contact.contribution.label">Beitrag:</Translate>
              </strong>{' '}
              <Translate id="contact.contribution.text">
                Nach 9 Jahren als Feldwebel bei der Bundeswehr bringe ich Führungsstärke, Zuverlässigkeit und einen kühlen Kopf unter Druck mit, dazu praktische Kenntnisse in Docker, CI/CD, Linux und Python.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="contact.location.label">Arbeitsort:</Translate>
              </strong>{' '}
              <Translate id="contact.location.text">
                Ich suche Stellen vor Ort oder hybrid im Raum Hamburg/Bremen und bin offen für Remote-Arbeit in ganz Deutschland.
              </Translate>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <p className={styles.subheading}>
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

          <a
            className={clsx(styles.linkItem, styles.profileLink)}
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer">
            <img
              className={styles.linkIcon}
              src={gitHubIconSrc}
              alt={translate({id: 'contact.githubIconAlt', message: 'GitHub-Logo'})}
            />
            GitHub
          </a>

          <div className={styles.actions}>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="light">
              <Translate id="contact.write">Nachricht schreiben</Translate>
            </Button>
            <Button href={cvHref} variant="secondary" download={CV_DOWNLOAD_NAME}>
              <Translate id="cv.download">Lebenslauf herunterladen</Translate>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
