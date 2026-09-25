import React from 'react';
import styles from './legal-notice.module.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/nico-meyer-672176376/';

export default function LegalNotice(): JSX.Element {
  return (
    <section className={styles.legalNotice}>
      <div className="container">
        <h1 className={styles.heading}>Legal notice</h1>
        <p className={styles.subheading}>Information according to § 5 DDG</p>

        <div className={styles.block}>
          <p>
            Nico Meyer
            <br />
            Poststraße 6a
            <br />
            21258 Heidenau
            <br />
            Germany
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Contact</h2>
          <p>Email: 2025nico@gmail.com</p>
          <p>
            You can also contact me via my LinkedIn profile:{' '}
            <a
              className={styles.link}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer">
              Profile Page
            </a>
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Responsible for content</h2>
          <p>
            Responsible for the content of this website pursuant to § 18
            Abs. 2 MStV:
          </p>
          <p>
            Nico Meyer
            <br />
            Poststraße 6a
            <br />
            21258 Heidenau
            <br />
            Germany
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Liability for content</h2>
          <p>
            As a service provider, I am responsible for my own content on
            this website in accordance with general laws. However, I am not
            obliged to monitor transmitted or stored third-party information
            or to investigate circumstances indicating illegal activity.
          </p>
          <p>
            Obligations to remove or block the use of information under
            generally applicable laws remain unaffected.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Liability for links</h2>
          <p>
            This website may contain links to external third-party websites.
            I have no influence over the content of these external websites
            and therefore cannot assume any liability for such third-party
            content.
          </p>
          <p>
            The respective provider or operator of the linked pages is
            always responsible for their content. The linked pages were
            checked for possible legal violations at the time the link was
            created. No unlawful content was apparent at that time.
          </p>
          <p>
            Permanent monitoring of the content of linked pages is not
            reasonable without specific evidence of a legal violation. If I
            become aware of any legal violations, I will remove the
            relevant links promptly.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Copyright</h2>
          <p>
            The content and works created by the website operator on this
            website are subject to German copyright law. Reproduction,
            editing, distribution or any kind of exploitation outside the
            limits of copyright law requires the prior written consent of
            the respective author or creator.
          </p>
          <p>
            Downloads and copies of this website are permitted for private,
            non-commercial use only, unless otherwise stated.
          </p>
          <p>
            Where the content on this website was not created by the
            operator, the copyrights of third parties are respected. In
            particular, third-party content is identified as such where
            applicable.
          </p>
          <p>
            If you nevertheless become aware of a copyright infringement,
            please notify me accordingly. Upon becoming aware of legal
            violations, I will remove such content promptly.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            EU Online Dispute Resolution
          </h2>
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR). However, I am neither obliged nor willing to
            participate in dispute resolution proceedings before a consumer
            arbitration board.
          </p>
        </div>
      </div>
    </section>
  );
}
