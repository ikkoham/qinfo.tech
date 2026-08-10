export type BibTeXType = 'article' | 'book' | 'inproceedings' | 'misc' | 'phdthesis' | 'mastersthesis' | 'patent';

export type PublicationCategory = 'originalPapers' | 'thesis' | 'kiyo' | 'books' | 'patents';

export interface Publication {
  id: string;
  type: BibTeXType;
  title: string;
  authors: string[];
  journal?: string;
  booktitle?: string;
  volume?: string;
  number?: string;
  pages?: string;
  year: number;
  doi?: string;
  url?: string;
  publisher?: string;
  note?: string;
  category: PublicationCategory;
}
