import React from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import OriginalNavbar from '@theme-original/Navbar';

// The portfolio pages render <Header /> themselves and use the portfolio
// design, which is exclusive to them. Every other page (the /docs section)
// keeps Docusaurus's standard navbar (with the language dropdown) instead.
const PORTFOLIO_DESIGN_PATHS = ['/', '/imprint', '/projects', '/certificates'];

const trimSlash = (path: string): string => path.replace(/\/$/, '');

export default function Navbar(): JSX.Element | null {
  const {pathname} = useLocation();
  const homePath = useBaseUrl('/');
  const imprintPath = useBaseUrl('/imprint');
  const projectsPath = useBaseUrl('/projects');
  const certificatesPath = useBaseUrl('/certificates');
  const normalizedPathname = trimSlash(pathname);

  const isPortfolioDesignPage = [
    homePath,
    imprintPath,
    projectsPath,
    certificatesPath,
  ].some((path) => trimSlash(path) === normalizedPathname);

  if (isPortfolioDesignPage) {
    return null;
  }

  return <OriginalNavbar />;
}
