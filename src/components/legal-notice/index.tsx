import React from 'react';
import Translate from '@docusaurus/Translate';
import {CONTACT_EMAIL, LINKEDIN_URL} from '@site/src/data/profile';
import styles from './legal-notice.module.css';

function Address(): JSX.Element {
  return (
    <p>
      Nico Meyer
      <br />
      Poststraße 6a
      <br />
      21258 Heidenau
      <br />
      <Translate id="legal.country">Deutschland</Translate>
    </p>
  );
}

export default function LegalNotice(): JSX.Element {
  return (
    <section className={styles.legalNotice}>
      <div className="container">
        <h1 className={styles.heading}>
          <Translate id="legal.heading">Impressum</Translate>
        </h1>
        <p className={styles.subheading}>
          <Translate id="legal.subheading">Angaben gemäß § 5 DDG</Translate>
        </p>

        <div className={styles.block}>
          <Address />
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            <Translate id="legal.contact.heading">Kontakt</Translate>
          </h2>
          {/* TODO: the address comes from src/data/profile.ts; an imprint needs a real, reachable e-mail. */}
          <p>
            <Translate id="legal.contact.email">E-Mail:</Translate>{' '}
            {CONTACT_EMAIL}
          </p>
          <p>
            <Translate id="legal.contact.linkedin">
              Sie können mich auch über mein LinkedIn-Profil erreichen:
            </Translate>{' '}
            <a
              className={styles.link}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            <Translate id="legal.responsible.heading">
              Verantwortlich für den Inhalt
            </Translate>
          </h2>
          <p>
            <Translate id="legal.responsible.text">
              Verantwortlich für den Inhalt dieser Website gemäß § 18 Abs. 2 MStV:
            </Translate>
          </p>
          <Address />
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            <Translate id="legal.content.heading">Haftung für Inhalte</Translate>
          </h2>
          <p>
            <Translate id="legal.content.p1">
              Als Diensteanbieter bin ich für eigene Inhalte auf dieser Website nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </Translate>
          </p>
          <p>
            <Translate id="legal.content.p2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.
            </Translate>
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            <Translate id="legal.links.heading">Haftung für Links</Translate>
          </h2>
          <p>
            <Translate id="legal.links.p1">
              Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte habe ich keinen Einfluss und kann daher keine Haftung für diese fremden Inhalte übernehmen.
            </Translate>
          </p>
          <p>
            <Translate id="legal.links.p2">
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße geprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.
            </Translate>
          </p>
          <p>
            <Translate id="legal.links.p3">
              Eine dauerhafte inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte für einen Rechtsverstoß nicht zumutbar. Sobald ich Kenntnis von Rechtsverletzungen erhalte, werde ich die betreffenden Links umgehend entfernen.
            </Translate>
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            <Translate id="legal.copyright.heading">Urheberrecht</Translate>
          </h2>
          <p>
            <Translate id="legal.copyright.p1">
              Die vom Betreiber dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors oder Urhebers.
            </Translate>
          </p>
          <p>
            <Translate id="legal.copyright.p2">
              Downloads und Kopien dieser Website sind nur für den privaten, nicht kommerziellen Gebrauch gestattet, sofern nicht anders angegeben.
            </Translate>
          </p>
          <p>
            <Translate id="legal.copyright.p3">
              Soweit Inhalte auf dieser Website nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Inhalte Dritter sind gegebenenfalls als solche gekennzeichnet.
            </Translate>
          </p>
          <p>
            <Translate id="legal.copyright.p4">
              Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich solche Inhalte umgehend entfernen.
            </Translate>
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>
            <Translate id="legal.odr.heading">
              EU-Online-Streitbeilegung
            </Translate>
          </h2>
          <p>
            <Translate id="legal.odr.text">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Ich bin jedoch weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}
