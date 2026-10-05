import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import Header from '@site/src/components/header';
import Footer from '@site/src/components/footer';
import LegalNotice from '@site/src/components/legal-notice';

export default function Imprint(): JSX.Element {
  return (
    <Layout
      title={translate({id: 'legal.heading', message: 'Impressum'})}
      description={translate({
        id: 'legal.page.description',
        message: 'Impressum und rechtliche Hinweise',
      })}>
      <Header />
      <LegalNotice />
      <Footer />
    </Layout>
  );
}
