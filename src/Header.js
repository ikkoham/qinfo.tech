import React from 'react';
import { IntlProvider, FormattedMessage  } from 'react-intl';

class Header extends React.Component {
render() {

  const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <header>
        <a href="" id="header_link">
          <h1><FormattedMessage id="ikko.hamamura" /></h1>
          <p><FormattedMessage id="student"/>, <FormattedMessage id="affiliation" /></p>
        </a>
      </header>
    </IntlProvider>
  );
}
}

export default Header;
