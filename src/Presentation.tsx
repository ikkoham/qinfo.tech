import React from 'react';
import { FormattedMessage } from 'react-intl';
import PresentationDetail from './PresentationDetail';
import { presentations } from './data/presentations';
import { Presentation as PresentationType } from './types/presentation';

const sortedByDateDesc = (a: PresentationType, b: PresentationType) => {
  const split_a = a.date.from.split(/[^0-9]/).map(Number);
  const split_b = b.date.from.split(/[^0-9]/).map(Number);
  const parsedDateA = new Date(split_a[0], split_a[1] - 1, split_a[2]);
  const parsedDateB = new Date(split_b[0], split_b[1] - 1, split_b[2]);
  return parsedDateB.getTime() - parsedDateA.getTime();
};

const Presentation = () => {
  const categorizedPresentations = {
    domesticOral: presentations
      .filter((p) => p.style === 'oral' && p.officialLang === 'ja')
      .sort(sortedByDateDesc),
    domesticPoster: presentations
      .filter((p) => p.style === 'poster' && p.officialLang === 'ja')
      .sort(sortedByDateDesc),
    summerSchool: presentations
      .filter((p) => p.style === 'summerSchool')
      .sort(sortedByDateDesc),
    internationalOral: presentations
      .filter((p) => p.style === 'oral' && p.officialLang === 'en')
      .sort(sortedByDateDesc),
    internationalPoster: presentations
      .filter((p) => p.style === 'poster' && p.officialLang === 'en')
      .sort(sortedByDateDesc),
    seminar: presentations
      .filter((p) => p.style === 'seminar')
      .sort(sortedByDateDesc),
  };

  return (
    <section id="presentation" className="main">
      <h2>
        <a href="/presentation">
          <i className="fa fa-bar-chart" />
          <FormattedMessage id="presentation" />
        </a>
      </h2>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fa fa-university" />
          <FormattedMessage id="international.oral" />
          <ol reversed>
            <PresentationDetail presentations={categorizedPresentations.internationalOral} />
          </ol>
        </li>
        <li>
          <i className="fa-li fa fa-university" />
          <FormattedMessage id="international.poster" />
          <ol reversed>
            <PresentationDetail presentations={categorizedPresentations.internationalPoster} />
          </ol>
        </li>
        <li>
          <i className="fa-li fa fa-university" />
          <FormattedMessage id="domestic.oral" />
          <ol reversed>
            <PresentationDetail presentations={categorizedPresentations.domesticOral} />
          </ol>
        </li>
        <li>
          <i className="fa-li fa fa-university" />
          <FormattedMessage id="domestic.poster" />
          <ol reversed>
            <PresentationDetail presentations={categorizedPresentations.domesticPoster} />
          </ol>
        </li>
        <li>
          <i className="fa-li fa fa-university" />
          <FormattedMessage id="summer.school" />
          <ol reversed>
            <PresentationDetail presentations={categorizedPresentations.summerSchool} />
          </ol>
        </li>
        <li>
          <i className="fa-li fa fa-university" />
          <FormattedMessage id="seminar" />
          <ol reversed>
            <PresentationDetail presentations={categorizedPresentations.seminar} />
          </ol>
        </li>
      </ul>
    </section>
  );
};

export default Presentation;
