import React from 'react';
import { Presentation } from './types/presentation';

interface PresentationDetailProps {
  presentations: Presentation[];
}
const PresentationDetail: React.FC<PresentationDetailProps> = ({ presentations }) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const format = (d: string) => {
    const dp = d.split(/[^0-9]/).map(Number);
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dp[0], dp[1] - 1, dp[2]));
  };

  const isMe = (name: string) => {
    const meNames = ['Ikko Hamamura', '濵村一航', '濵村 一航', '浜村一航', '浜村 一航', '濱村一航', '濱村 一航'];
    return meNames.includes(name.trim());
  };

  const renderAuthors = (p: Presentation) => p.authors.map((author, index) => {
    const isPresenter = author.trim() === p.presenter.trim();
    const isHamamura = isMe(author);
    const roleLabel = isPresenter ? ` (${p.presenterRole || 'Speaker'})` : '';

    return (
      <span key={author}>
        {isHamamura ? <u><strong>{author}</strong></u> : author}
        {roleLabel}
        {index < p.authors.length - 1 ? ', ' : ''}
      </span>
    );
  });

  return (
    <>
      {presentations.map((p) => (
        <li key={p.id || `${p.title}-${p.date.from}`}>
          {renderAuthors(p)}
          <br />
          "
          {p.title}
          "
          {' '}
          {p.id}
          <br />

          <a href={p.workshopUrl} target="_blank" rel="noopener noreferrer">
            {p.workshopName}
          </a>
          {(typeof p.workshopName !== 'undefined') && <br />}
          @
          {p.place}
          <br />
          {format(p.date.from)}
          {' '}
          {(p.date.from !== p.date.to) && `- ${format(p.date.to)}`}
        </li>
      ))}
    </>
  );
};

export default PresentationDetail;
