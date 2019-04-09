import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';

class Nav extends React.Component {
render() {
const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);
  const fa_icon = {
  "research.interest": "fa-search",
    "publication": "fa-file-o",
    "presentation": "fa-bar-chart",
    "cv": "fa-graduation-cap",
    "contact": "fa-envelope-o"
  }
  const link = this.props.match.params.link ? this.props.match.params.link.replace('.', '_') : ''
  return (
    <IntlProvider locale={locale} messages={messages}>
      <nav>
        <ul className="flex-container">
          {["research.interest", "publication", "presentation", "cv", "contact"]
          .filter( x => x !== link )
          .map( x =>
          <li key={x}>
            <NavLink to={"/" + locale + "/" + x.replace('.', '_')}>
              <i className={"fa " + fa_icon[x]}></i><FormattedMessage id={x}/>
            </NavLink>
          </li>
        )
        }
        <li>
          <Link to={"/" + (locale === 'en' ? 'ja' : 'en')}>
            <i className="fa fa-language"></i>{locale === 'en' ? "Japanese" : "English"}
          </Link>
        </li>
        <li>
          <img src='/img/ikkoham.jpg' alt="ホームページの中の人の画像" />
        </li>
      </ul>
    </nav>
  </IntlProvider>
);
}
}

export default Nav;
