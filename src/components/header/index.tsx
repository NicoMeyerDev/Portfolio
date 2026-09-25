import React, {useState} from 'react';
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

  // Resolve a site-root-relative path against the configured baseUrl, so
  // links to homepage anchors and /docs work from any page, including a
  // GitHub Pages baseUrl like "/Portfolio/".
  const withBase = (path: string): string =>
    `${siteConfig.baseUrl}${path.replace(/^\//, '')}`;

  return (
    <header className={styles.header}>
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
