import React, {useState} from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.inner)}>
        <nav className={clsx(styles.nav, isOpen && styles.navOpen)}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
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
