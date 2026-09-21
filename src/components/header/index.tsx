import React from 'react';
import clsx from 'clsx';
import styles from './header.module.css';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  {label: 'About me', href: '#hero'},
  {label: 'My skills', href: '#skills'},
  {label: 'My projects', href: '#projects'},
  {label: 'Contact', href: '#contact'},
];

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.inner)}>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        {/* TODO: burger menu logic (toggle nav open/closed on mobile) */}
        <button
          type="button"
          className={styles.burgerButton}
          aria-label="Toggle navigation">
          <span className={styles.burgerIcon} />
        </button>
      </div>
    </header>
  );
}
