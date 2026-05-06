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

  return (
    <>
      {presentations.map((p) => (
        <li key={p.id || `${p.title}-${p.date.from}`}>
          {p.speaker}
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
