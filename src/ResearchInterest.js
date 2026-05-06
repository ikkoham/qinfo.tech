import React from 'react';
import { FormattedMessage } from 'react-intl';

const ResearchInterest = () => (
  <section id="research_interest" className="main">
    <h2>
      <i className="fa fa-search" />
      <FormattedMessage id="research.interest" />
    </h2>
    <ul className="fa-ul">
      <li>
        <i className="fa-li fa fa-star" />
        <FormattedMessage id="quantum.information" />
      </li>
      <li>
        <i className="fa-li fa fa-star" />
        <FormattedMessage id="quantum.measurement.theory" />
      </li>
    </ul>
  </section>
);

export default ResearchInterest;
