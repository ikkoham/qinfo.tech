import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

class Contact extends React.Component {
render() {
const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <section id="contact" className="main">
        <h2>
          <a href="#contact">
            <i className="fa fa-envelope-o"></i><FormattedMessage id="contact"/>
          </a>
        </h2>
        <table>
          <tbody>
            <tr>
              <th><FormattedMessage id="name"/></th>
              <td><FormattedMessage id="ikko.hamamura"/></td>
            </tr>
            <tr>
              <th><FormattedMessage id="email"/></th>
              <td> hamamura[*atmark*]<wbr/>nucleng<wbr/>.kyoto-u.ac.jp</td>
            </tr>
            <tr>
              <th><FormattedMessage id="office"/></th>
              <td><FormattedMessage id="address"/></td>
            </tr>
            <tr>
              <th><FormattedMessage id="phone"/></th>
              <td><FormattedMessage id="phone.number"/></td>
          </tr>
        </tbody>
      </table>
    </section>
  </IntlProvider>
);
}
}

export default Contact;
