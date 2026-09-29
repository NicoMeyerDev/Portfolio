import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Button from '@site/src/components/button';
import {CV_DOWNLOAD_NAME, CV_PATH} from '@site/src/data/profile';
import styles from './hero.module.css';

export default function Hero(): JSX.Element {
  const photoSrc = useBaseUrl('img/profile.png');
  const cvHref = useBaseUrl(CV_PATH);
  const certificatesHref = useBaseUrl('/certificates');
  const {siteConfig} = useDocusaurusContext();
  return (
    <section id="hero" className={styles.hero}>
      <div className={clsx('container', styles.inner)}>
        <p className={styles.greeting}>
          <Translate id="hero.greeting">Hallo 👋 ich bin</Translate>
        </p>
        <h1 className={styles.name}>Nico Meyer</h1>
        <p className={styles.role}>{siteConfig.title}</p>
        <p className={styles.tagline}>
          <Translate id="hero.tagline">
            Ich baue Backends und bringe sie sicher in Produktion.
          </Translate>
        </p>
        <p className={styles.bio}>
          <Translate id="hero.bio">
            Als Kfz-Mechatroniker und ehemaliger Feldwebel habe ich neun Jahre bei der Bundeswehr Verantwortung für komplexe Systeme übernommen. Heute konzentriere ich mich auf Backend-Entwicklung und DevSecOps: Ich baue containerisierte Anwendungen, automatisiere Deployments mit CI/CD und denke Sicherheit von Anfang an mit.
          </Translate>
        </p>
        <div className={styles.cta}>
          <Button href="#contact" variant="light" className={styles.ctaButton}>
            <Translate id="hero.cta.contact">Kontakt aufnehmen</Translate>
          </Button>
          <Button
            href={cvHref}
            variant="secondary"
            className={styles.ctaButton}
            download={CV_DOWNLOAD_NAME}>
            <Translate id="cv.download">Lebenslauf herunterladen</Translate>
          </Button>
          <Button
            href={certificatesHref}
            variant="secondary"
            className={styles.ctaButton}>
            <Translate id="certificates.view">Zertifikate ansehen</Translate>
          </Button>
        </div>
        <img
          className={styles.photo}
          src={photoSrc}
          alt={translate({
            id: 'hero.photoAlt',
            message: 'Porträtfoto von Nico Meyer',
          })}
        />
      </div>
    </section>
  );
}
