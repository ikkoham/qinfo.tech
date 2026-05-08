export type BibTeXType = 'article' | 'book' | 'inproceedings' | 'misc' | 'phdthesis' | 'mastersthesis';

export type PublicationCategory = 'originalPapers' | 'thesis' | 'kiyo';

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
