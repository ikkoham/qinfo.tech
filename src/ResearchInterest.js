import React from 'react';
import { IntlProvider, FormattedMessage  } from 'react-intl';

class ResearchInterest extends React.Component {
render() {

  const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <section id="research_interest" className="main">
        <h2>
          <i className="fa fa-search"></i><FormattedMessage id="research.interest"/>
        </h2>
        <ul className="fa-ul">
          <li><i className="fa-li fa fa-star"></i><FormattedMessage id="quantum.information"/></li>
          <li><i className="fa-li fa fa-star"></i><FormattedMessage id="quantum.measurement.theory"/></li>
        </ul>
      </section>
    </IntlProvider>
  );
}
}

export default ResearchInterest;
