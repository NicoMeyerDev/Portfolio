import {translate} from '@docusaurus/Translate';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  // Path below static/, e.g. files/zertifikate/….pdf
  file: string;
}

// TODO: replace the placeholder entries and PDFs in static/files/zertifikate/.
export function getCertificates(): Certificate[] {
  const dateTodo = translate({
    id: 'certificates.date.todo',
    message: 'Datum folgt',
  });
  return [
    {
      id: 'placeholder-1',
      title: translate({
        id: 'certificates.placeholder1.title',
        message: 'Zertifikat 1 (Platzhalter)',
      }),
      issuer: 'Developer Akademie',
      date: dateTodo,
      file: 'files/zertifikate/zertifikat-platzhalter-1.pdf',
    },
    {
      id: 'placeholder-2',
      title: translate({
        id: 'certificates.placeholder2.title',
        message: 'Zertifikat 2 (Platzhalter)',
      }),
      issuer: translate({
        id: 'certificates.placeholder2.issuer',
        message: 'Aussteller folgt',
      }),
      date: dateTodo,
      file: 'files/zertifikate/zertifikat-platzhalter-2.pdf',
    },
  ];
}
