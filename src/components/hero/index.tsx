import React from 'react';
import clsx from 'clsx';
import Button from '@site/src/components/button';
import styles from './hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <section id="hero" className={styles.hero}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hey there. 👋 I am</p>
          <h1 className={styles.name}>Nico Meyer</h1>
          <p className={styles.role}>DevSecOps Engineer in progress</p>
          <p className={styles.bio}>
            Write some information about yourself that is IT related. For
            example: Why are you passionate about coding? Do you have a deep
            interest in games? What is your source of inspiration for
            improving your programming skills? Are you constantly learning
            and keeping up to date?
          </p>
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
