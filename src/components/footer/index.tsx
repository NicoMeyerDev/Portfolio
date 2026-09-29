import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './footer.module.css';

// The button only shows once the visitor has scrolled a bit.
const SHOW_AFTER_SCROLL = 300;

function scrollToTop(): void {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

export default function Footer(): JSX.Element {
  const imprintHref = useBaseUrl('imprint');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > SHOW_AFTER_SCROLL);
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.legalGroup}>
          <p className={styles.copyright}>
            © Nico Meyer {new Date().getFullYear()}
          </p>
          <a className={styles.legalNotice} href={imprintHref}>
            <Translate id="footer.legalNotice">Impressum</Translate>
          </a>
        </div>
      </div>
      <button
        type="button"
        className={clsx(styles.scrollTop, showScrollTop && styles.scrollTopVisible)}
        onClick={scrollToTop}
        tabIndex={showScrollTop ? 0 : -1}
        aria-hidden={!showScrollTop}
        aria-label={translate({id: 'footer.scrollTop', message: 'Nach oben scrollen'})}>
        <svg
          className={styles.scrollTopIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
