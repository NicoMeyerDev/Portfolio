import React from 'react';
import {useLocation} from '@docusaurus/router';
import Footer from '@site/src/components/footer';

export default function ThemeFooter(): JSX.Element | null {
  const {pathname} = useLocation();

  if (pathname.includes('/docs')) {
    return null;
  }

  return <Footer />;
}
