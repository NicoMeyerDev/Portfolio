import React from 'react';
import clsx from 'clsx';
import Button from '@site/src/components/button';
import styles from './hero.module.css';

export default function Hero(): JSX.Element {
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
          <Button href="#contact" variant="secondary">
            Contact me
          </Button>
        </div>
        {/* TODO: replace with the real profile photo exported from Figma */}
        <div
          className={styles.imagePlaceholder}
          role="img"
          aria-label="Profile photo placeholder"
        />
      </div>
    </section>
  );
}
