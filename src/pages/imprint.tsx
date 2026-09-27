import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header';
import Footer from '@site/src/components/footer';
import LegalNotice from '@site/src/components/legal-notice';

export default function Imprint(): JSX.Element {
  return (
    <Layout title="Legal notice" description="Legal notice (Impressum)">
      <Header />
      <LegalNotice />
      <Footer />
    </Layout>
  );
}
