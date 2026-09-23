import React from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '@site/src/components/header';

// The homepage renders <Header /> itself in src/pages/index.tsx, so this
// override only provides it for all other pages (e.g. the /docs section).
export default function Navbar(): JSX.Element | null {
  const {pathname} = useLocation();
  const homePath = useBaseUrl('/');

  if (pathname.replace(/\/$/, '') === homePath.replace(/\/$/, '')) {
    return null;
  }

  return <Header />;
}
