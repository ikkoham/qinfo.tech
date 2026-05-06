export type PresentationStyle = 'oral' | 'poster' | 'summerSchool' | 'seminar';

export interface Presentation {
  title: string;
  speaker: string;
  authors?: string;
  id?: string;
  workshopName?: string;
  workshopUrl?: string;
  place: string;
  date: {
    from: string;
    to: string;
  };
  officialLang: 'ja' | 'en';
  lang: 'ja' | 'en';
  style: PresentationStyle;
}
