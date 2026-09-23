import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Button from '@site/src/components/button';
import styles from './hero.module.css';

export default function Hero(): JSX.Element {
  const photoSrc = useBaseUrl('img/profile.png');
  return (
    <section id="hero" className={styles.hero}>
      <div className={clsx('container', styles.inner)}>
        <p className={styles.greeting}>Hey there. 👋 I am</p>
        <h1 className={styles.name}>Nico Meyer</h1>
        <p className={styles.role}>DevSecOps Engineer</p>
        <p className={styles.bio}>
          As a trained automotive mechatronics technician and former Feldwebel, I spent nine years in the Bundeswehr working with complex systems, taking responsibility, and solving problems under pressure.
          Today, I bring that experience into software development, with a focus on backend development and DevSecOps.
          I build containerized applications with Docker, automate deployments with CI/CD, and treat security as an integral part of the development process.
          For me, moving into IT isn’t starting over, but building on what I’ve already learned and applying it to a new kind of complex system.
          I’m continuously learning, building real projects, and expanding my skills in a field that never stands still.
          </p>
        <div className={styles.cta}>
          <Button href="#contact" variant="light">
            Contact me
          </Button>
        </div>
        <img
          className={styles.photo}
          src={photoSrc}
          alt="Nico Meyer"
        />
      </div>
    </section>
  );
}
