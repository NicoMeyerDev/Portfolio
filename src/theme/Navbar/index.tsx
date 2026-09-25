import React from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '@site/src/components/header';

// The homepage and the imprint page render <Header /> themselves (see
// src/pages/index.tsx and src/pages/imprint.mdx), since the portfolio
// design only applies to those two pages. This override provides the
// same Header for every other page (e.g. the /docs section).
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

  return <Header />;
}
