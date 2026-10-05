import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '@site/src/components/header';
import Footer from '@site/src/components/footer';
import Button from '@site/src/components/button';
import {getCertificates, type Certificate} from '@site/src/data/certificates';
import styles from './certificates.module.css';

function CertificateItem({certificate}: {certificate: Certificate}): JSX.Element {
  const fileHref = useBaseUrl(certificate.file);
  return (
    <li className={styles.item}>
      <div className={styles.text}>
        <h2 className={styles.title}>{certificate.title}</h2>
        <p className={styles.meta}>
          {certificate.issuer} · {certificate.date}
        </p>
        <p className={styles.details}>{certificate.details}</p>
      </div>
      <Button href={fileHref} variant="light" external>
        <Translate id="certificates.open">Ansehen (PDF)</Translate>
      </Button>
    </li>
  );
}

export default function CertificatesPage(): JSX.Element {
  const certificates = getCertificates();
  return (
    <Layout
      title={translate({id: 'certificates.page.title', message: 'Zertifikate'})}
      description={translate({
        id: 'certificates.page.description',
        message: 'Zertifikate und Nachweise von Nico Meyer.',
      })}>
      <Header />
      <main className={styles.page}>
        <div className="container">
          <h1 className={styles.heading}>
            <Translate id="certificates.page.heading">Zertifikate</Translate>
          </h1>
          <ul className={styles.list}>
            {certificates.map((certificate) => (
              <CertificateItem key={certificate.id} certificate={certificate} />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
