import React from 'react';
import styles from './legal-notice.module.css';

export default function LegalNotice(): JSX.Element {
  return (
    <section className={styles.legalNotice}>
      <div className="container">
        <h1 className={styles.heading}>Legal notice</h1>
        <p className={styles.subheading}>Impressum gemäß § 5 DDG</p>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Diensteanbieter</h2>
          <p>[PLACEHOLDER: full name]</p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Anschrift</h2>
          <p>
            [PLACEHOLDER: street and house number]
            <br />
            [PLACEHOLDER: postal code and city]
            <br />
            [PLACEHOLDER: country]
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            Elektronische Kontaktmöglichkeit
          </h2>
          <p>
            E-Mail: [PLACEHOLDER: email address]
            <br />
            Telefon: [PLACEHOLDER: phone number (optional)]
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
          </h2>
          <p>
            [PLACEHOLDER: full name]
            <br />
            [PLACEHOLDER: street and house number]
            <br />
            [PLACEHOLDER: postal code and city]
          </p>
        </div>
      </div>
    </section>
  );
}
