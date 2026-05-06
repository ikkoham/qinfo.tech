import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import PresentationDetail from './PresentationDetail';

const Presentation = () => {
  const [presentation, setPresentation] = useState(null);

  useEffect(() => {
    const sortedByDateDesc = (a, b) => {
      const split_a = a.date.from.split(/[^0-9]/);
      const split_b = b.date.from.split(/[^0-9]/);
      const parsedDateA = new Date(split_a[0], split_a[1] - 1, split_a[2]);
      const parsedDateB = new Date(split_b[0], split_b[1] - 1, split_b[2]);
      if (parsedDateA < parsedDateB) {
        return 1;
      }
      if (parsedDateA > parsedDateB) {
        return -1;
      }
      return 1;
    };

    fetch(`${process.env.PUBLIC_URL}/api/presentation.json`)
      .then((res) => res.json())
      .then((res) => {
        setPresentation({
          domesticOral: res
            .filter((p) => p.style === 'oral' && p.officialLang === 'ja')
            .sort(sortedByDateDesc),
          domesticPoster: res
            .filter((p) => p.style === 'poster' && p.officialLang === 'ja')
            .sort(sortedByDateDesc),
          summerSchool: res
            .filter((p) => p.style === 'summerSchool')
            .sort(sortedByDateDesc),
          internationalOral: res
            .filter((p) => p.style === 'oral' && p.officialLang === 'en')
            .sort(sortedByDateDesc),
          internationalPoster: res
            .filter((p) => p.style === 'poster' && p.officialLang === 'en')
            .sort(sortedByDateDesc),
          seminar: res
            .filter((p) => p.style === 'seminar')
            .sort(sortedByDateDesc),
        });
      });
  }, []);

  if (presentation) {
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
            <ol reversed="reversed">
              <PresentationDetail presentations={presentation.internationalOral} />
            </ol>
          </li>
          <li>
            <i className="fa-li fa fa-university" />
            <FormattedMessage id="international.poster" />
            <ol reversed="reversed">
              <PresentationDetail presentations={presentation.internationalPoster} />
            </ol>
          </li>
          <li>
            <i className="fa-li fa fa-university" />
            <FormattedMessage id="domestic.oral" />
            <ol reversed="reversed">
              <PresentationDetail presentations={presentation.domesticOral} />
            </ol>
          </li>
          <li>
            <i className="fa-li fa fa-university" />
            <FormattedMessage id="domestic.poster" />
            <ol reversed="reversed">
              <PresentationDetail presentations={presentation.domesticPoster} />
            </ol>
          </li>
          <li>
            <i className="fa-li fa fa-university" />
            <FormattedMessage id="summer.school" />
            <ol reversed="reversed">
              <PresentationDetail presentations={presentation.summerSchool} />
            </ol>
          </li>
          <li>
            <i className="fa-li fa fa-university" />
            <FormattedMessage id="seminar" />
            <ol reversed="reversed">
              <PresentationDetail presentations={presentation.seminar} />
            </ol>
          </li>
        </ul>
      </section>
    );
  }

  return (
    <section id="presentation" className="main">
      <h2>
        <a href="/presentation">
          <i className="fa fa-bar-chart" />
          <FormattedMessage id="presentation" />
        </a>
      </h2>
      <p>Now loading</p>
    </section>
  );
};

export default Presentation;
