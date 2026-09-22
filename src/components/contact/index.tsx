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
            <li>Role: I'm looking for a position as a Junior DevSecOps Engineer or Backend Developer,
               and I'm also open to a dual study program in computer science.</li>
            <li>Contribution: After 9 years in the Bundeswehr as a Feldwebel, I bring leadership, reliability and a calm head under pressure,
               combined with hands-on skills in Docker, CI/CD, Linux and Python.</li>
            <li>Remote: I'm looking for on-site or hybrid roles in the Hamburg/Bremen area and I'm open to remote work anywhere in Germany.</li>
          </ul>
        </div>
        <div className={styles.links}>
          <p className={styles.lookingForward}>
            Looking forward to hearing from you!
          </p>
          <a className={styles.linkItem} href="mailto:2025nico@gmail.com">
            2025nico@gmail.com
          </a>
          
          <a
            className={styles.linkItem}
            href="https://www.linkedin.com/in/nico-meyer-672176376/"
            target="_blank"
            rel="noopener noreferrer">
            Profile Page
          </a>
        </div>
      </div>
    </section>
  );
}
