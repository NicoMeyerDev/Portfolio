import React from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import OriginalNavbar from '@theme-original/Navbar';

// The homepage and the imprint page render <Header /> themselves (see
// src/pages/index.tsx and src/pages/imprint.mdx) and use the portfolio
// design, which is exclusive to those two pages. Every other page (the
// /docs section) keeps Docusaurus's standard navbar and layout instead.
export default function Navbar(): JSX.Element | null {
  const {pathname} = useLocation();
  const homePath = useBaseUrl('/');
  const imprintPath = useBaseUrl('/imprint');
  const normalizedPathname = pathname.replace(/\/$/, '');

  const isPortfolioDesignPage =
    normalizedPathname === homePath.replace(/\/$/, '') ||
    normalizedPathname === imprintPath.replace(/\/$/, '');

  if (isPortfolioDesignPage) {
    return null;
  }

  return <OriginalNavbar />;
}
