import React from 'react';
import { FormattedMessage } from 'react-intl';
import { publications } from './data/publications';
import { Publication as PublicationType } from './types/publication';

const PublicationItem: React.FC<{ pub: PublicationType }> = ({ pub }) => {
  const formatAuthors = (authors: string[]) => {
    if (authors.length <= 6) {
      return authors.join(', ');
    }
    return `${authors.slice(0, 3).join(', ')}, et al.`;
  };

  if (pub.category === 'originalPapers') {
    return (
      <li>
        {pub.title.startsWith('“') ? pub.title : `“${pub.title}”`}
        <br />
        {formatAuthors(pub.authors)}
        <br />
        <a href={pub.url} target="_blank" rel="noopener noreferrer">
          {pub.journal}
          {' '}
          {pub.volume}
          {pub.number && ` (${pub.number})`}
          {pub.pages && `, ${pub.pages}`}
          {` (${pub.year})`}
        </a>
      </li>
    );
  }

  if (pub.category === 'thesis') {
    return (
      <li>
        {formatAuthors(pub.authors)}
        , “
        {pub.title}
        ”,
        {' '}
        {pub.journal}
        ,
        {' '}
        {pub.publisher}
        ,
        {' '}
        {pub.volume && `Vol. ${pub.volume} `}
        {pub.number && `No. ${pub.number}, `}
        {pub.pages && `${pub.pages}, `}
        {`(${pub.year}).`}
        {pub.doi && (
          <>
            {' '}
            doi:
            {' '}
            <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.doi}</a>
          </>
        )}
      </li>
    );
  }

  // category === 'kiyo'
  return (
    <li>
      {formatAuthors(pub.authors)}
      「
      {pub.title}
      」,
      {' '}
      {pub.journal}
      ,
      {' '}
      {pub.publisher}
      ,
      {' '}
      {pub.volume}
      {' '}
      {pub.pages && `p.${pub.pages} `}
      {`(${pub.year}).`}
    </li>
  );
};

const Publication = () => {
  const originalPapers = publications
    .filter((p) => p.category === 'originalPapers')
    .sort((a, b) => b.year - a.year);
  const thesis = publications
    .filter((p) => p.category === 'thesis')
    .sort((a, b) => b.year - a.year);
  const kiyo = publications
    .filter((p) => p.category === 'kiyo')
    .sort((a, b) => b.year - a.year);

  return (
    <section id="publication" className="main">
      <h2>
        <a href="#publication">
          <i className="fa fa-file-o" />
          <FormattedMessage id="publication" />
        </a>
      </h2>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fa fa-diamond" />
          <FormattedMessage id="original.papers" />
          <ol reversed>
            {originalPapers.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} />
            ))}
          </ol>
        </li>
        <li>
          <i className="fa-li fa fa-book" />
          <FormattedMessage id="thesis" />
          <ol reversed>
            {thesis.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} />
            ))}
          </ol>
        </li>
        <li>
          <i className="fa-li fa fa-book" />
          <FormattedMessage id="kiyo" />
          <ol reversed>
            {kiyo.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} />
            ))}
          </ol>
        </li>
      </ul>
    </section>
  );
};

export default Publication;
