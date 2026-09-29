import {translate} from '@docusaurus/Translate';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  // Issue date as it should be shown (localized).
  date: string;
  // Short line about scope or content.
  details: string;
  // Path below static/, e.g. files/zertifikate/….pdf
  file: string;
}

// Newest first. Built at render time so translate() picks the active locale.
export function getCertificates(): Certificate[] {
  return [
    {
      id: 'developer-akademie',
      title: translate({
        id: 'certificates.devakademie.title',
        message: 'Softwareentwickler, Schwerpunkt Web-Anwendungen Back-End Development',
      }),
      issuer: 'Developer Akademie GmbH',
      date: translate({id: 'certificates.devakademie.date', message: '01.06.2026'}),
      details: translate({
        id: 'certificates.devakademie.details',
        message: 'Weiterbildung mit 13 Modulen und 4 komplexen Capstone-Projekten (Python, Django, PostgreSQL, Docker, Linux, Redis, Cloud)',
      }),
      file: 'files/zertifikate/developer-akademie-abschlusszertifikat.pdf',
    },
    {
      id: 'ta-nord-python',
      title: translate({
        id: 'certificates.tanord.title',
        message: 'Python Grundlagen',
      }),
      issuer: 'Technische Akademie Nord e.V.',
      date: translate({id: 'certificates.tanord.date', message: '27.03.2026'}),
      details: translate({
        id: 'certificates.tanord.details',
        message: 'Online-Lehrgang vom 16.02. bis 27.03.2026 mit Abschlussprojekt zur Automatisierung von Arbeitsprozessen',
      }),
      file: 'files/zertifikate/technische-akademie-nord-python-grundlagen.pdf',
    },
    {
      id: 'trainm-data-analyst',
      title: 'Data-Analyst (Python)',
      issuer: 'trainM GmbH',
      date: translate({id: 'certificates.trainm.date', message: '24.10.2025'}),
      details: translate({
        id: 'certificates.trainm.details',
        message: 'E-Training vom 07.07. bis 24.10.2025 mit praxisorientierter Anwendungsaufgabe',
      }),
      file: 'files/zertifikate/trainm-data-analyst-python.pdf',
    },
  ];
}
