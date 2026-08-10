export type PresentationStyle = 'oral' | 'poster' | 'summerSchool' | 'seminar' | 'invited' | 'handsOn';

export interface Presentation {
  title: string;
  presenter: string;
  authors: string[];
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
  presenterRole?: string;
}
