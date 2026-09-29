import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import styles from './header.module.css';

interface NavItem {
  label: string;
  to: string;
}

// Built at render time so translate() picks the active locale.
const getNavItems = (): NavItem[] => [
  {label: translate({id: 'nav.about', message: 'Über mich'}), to: '/#about'},
  {label: translate({id: 'nav.skills', message: 'Skills'}), to: '/#skills'},
  {label: translate({id: 'nav.projects', message: 'Projekte'}), to: '/#projects'},
  {label: translate({id: 'nav.contact', message: 'Kontakt'}), to: '/#contact'},
];

// Below this scroll offset the header always stays visible, so it doesn't
// hide itself over content that hasn't scrolled away yet.
const HIDE_THRESHOLD = 80;

export default function Header(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const {createUrl} = useAlternatePageUtils();
  const navItems = getNavItems();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) {
      setIsHidden(false);
    }
  }, [isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isOpenRef.current) {
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= HIDE_THRESHOLD) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resolve a site-root-relative path against the configured baseUrl, so
  // links to homepage anchors and /docs work from any page, including a
  // GitHub Pages baseUrl like "/Portfolio/".
  const withBase = (path: string): string =>
    `${siteConfig.baseUrl}${path.replace(/^\//, '')}`;

  return (
    <header className={clsx(styles.header, isHidden && styles.headerHidden)}>
      <div className={clsx('container', styles.inner)}>
        <nav className={clsx(styles.nav, isOpen && styles.navOpen)}>
          {navItems.map((item) => (
            <a
              key={item.to}
              href={withBase(item.to)}
              className={styles.navLink}
              onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <div
            className={styles.langSwitch}
            role="group"
            aria-label={translate({id: 'nav.language', message: 'Sprache'})}>
            {i18n.locales.map((locale) => (
              <a
                key={locale}
                href={createUrl({locale, fullyQualified: false})}
                className={clsx(
                  styles.langLink,
                  locale === i18n.currentLocale && styles.langLinkActive,
                )}
                lang={locale}
                aria-current={locale === i18n.currentLocale ? 'true' : undefined}>
                {locale.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={
            isOpen
              ? translate({id: 'nav.close', message: 'Navigation schließen'})
              : translate({id: 'nav.open', message: 'Navigation öffnen'})
          }
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
