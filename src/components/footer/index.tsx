import React from 'react';
import clsx from 'clsx';
import styles from './footer.module.css';

function scrollToTop(): void {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.inner)}>
        <button
          type="button"
          className={styles.scrollTop}
          onClick={scrollToTop}
          aria-label="Scroll to top">
          ↑
        </button>
        <p className={styles.copyright}>
          © Nico Meyer {new Date().getFullYear()}
        </p>
        {/* TODO: link to a real legal notice / imprint page once one exists */}
        <a className={styles.legalNotice} href="#">
          Legal notice
        </a>
      </div>
    </footer>
  );
}
