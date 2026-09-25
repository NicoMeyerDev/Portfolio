import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './footer.module.css';

function scrollToTop(): void {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

export default function Footer(): JSX.Element {
  const arrowIconSrc = useBaseUrl('img/button-arrow.svg');
  const imprintHref = useBaseUrl('imprint');

  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.inner)}>
        <button
          type="button"
          className={styles.scrollTop}
          onClick={scrollToTop}
          aria-label="Scroll to top">
          <img className={styles.scrollTopIcon} src={arrowIconSrc} alt="" aria-hidden="true" />
        </button>
        <div className={styles.legalGroup}>
          <p className={styles.copyright}>
            © Nico Meyer {new Date().getFullYear()}
          </p>
          <a className={styles.legalNotice} href={imprintHref}>
            Legal notice
          </a>
        </div>
      </div>
    </footer>
  );
}
