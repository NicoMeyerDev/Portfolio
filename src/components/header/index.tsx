import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './header.module.css';

interface NavItem {
  label: string;
  to: string;
}

const NAV_ITEMS: NavItem[] = [
  {label: 'About me', to: '/#hero'},
  {label: 'My skills', to: '/#skills'},
  {label: 'My projects', to: '/#projects'},
  {label: 'Contact', to: '/#contact'},
];

export default function Header(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Resolve a site-root-relative path against the configured baseUrl, so
  // links to homepage anchors and /docs work from any page, including a
  // GitHub Pages baseUrl like "/Portfolio/".
  const withBase = (path: string): string =>
    `${siteConfig.baseUrl}${path.replace(/^\//, '')}`;

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledDown = currentScrollY > lastScrollY.current;

      // Hide as soon as the page scrolls down, reveal again once the
      // user scrolls back up (or is at the very top).
      setIsHidden(scrolledDown && currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        styles.header,
        'navbar',
        isHidden && !isOpen && styles.headerHidden,
      )}>
      <div className={clsx('container', styles.inner)}>
        <nav className={clsx(styles.nav, isOpen && styles.navOpen)}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.to}
              href={withBase(item.to)}
              className={styles.navLink}
              onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}>
          <span className={styles.burgerIcon} />
          <span className={styles.burgerIcon} />
          <span className={styles.burgerIcon} />
        </button>
      </div>
    </header>
  );
}
