import React from 'react';
import clsx from 'clsx';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className={styles.contact}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Contact me</h2>
          <p>Include information like:</p>
          <ul>
            <li>
              Feel free to reach out with job offers or opportunities like...
            </li>
            <li>what role are you looking for?</li>
            <li>how you will contribute to the new team.</li>
            <li>Are you open for remote work or even relocate?</li>
          </ul>
        </div>
        <div className={styles.links}>
          <p className={styles.lookingForward}>
            Looking forward to hearing from you!
          </p>
          {/* TODO: replace with the real contact email */}
          <a className={styles.linkItem} href="mailto:your.email@example.com">
            your.email@example.com
          </a>
          {/* TODO: replace with the real LinkedIn profile URL */}
          <a
            className={styles.linkItem}
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer">
            Profile Page
          </a>
        </div>
      </div>
    </section>
  );
}
