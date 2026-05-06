import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header = () => (
  <header>
    <a href="/" id="header_link">
      <h1><FormattedMessage id="ikko.hamamura" /></h1>
      <p>
        <FormattedMessage id="student" />
        ,
        {' '}
        <FormattedMessage id="affiliation" />
      </p>
    </a>
  </header>
);

export default Header;
