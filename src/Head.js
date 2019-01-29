import React from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';


class Head extends React.Component {
  render() {
    const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
    const messages = require(`./locale/${locale}.json`);
    const intlProvider = new IntlProvider({ locale, messages }, {});
    const { intl } = intlProvider.getChildContext();
    return(
      <div className="head">
        <Helmet>
          <base href="/" />
          <title>{intl.formatMessage({id: 'ikko.hamamura'})}</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />

          <meta name="description" content="Ikko Hamamura's Home Page" />
          <meta name="keywords" content="Quantum Information,Quantum Measurement" />
          <meta name="author" content="Ikko Hamamura" />

          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Ikko Hamamura"/>
          <meta property="og:description" content="Ikko Hamamura's Home Page" />

          <meta property="og:url" content="http://qinfo.tech"/>
          <meta property="og:site_name" content=""/>

          <meta content="summary" name="twitter:card" />
          <meta content="@ikkoham" name="twitter:site" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noarchive" />

        </Helmet>
      </div>
    );
  }
};

export default Head;
