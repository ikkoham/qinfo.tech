import React from 'react';
import { FormattedMessage } from 'react-intl';

const Contact = () => (
  <section id="contact" className="main">
    <h2>
      <a href="#contact">
        <i className="fa fa-envelope-o" />
        <FormattedMessage id="contact" />
      </a>
    </h2>
    <table>
      <tbody>
        <tr>
          <th><FormattedMessage id="name" /></th>
          <td><FormattedMessage id="ikko.hamamura" /></td>
        </tr>
        <tr>
          <th><FormattedMessage id="email" /></th>
          <td>
            {' '}
            hamamura[*atmark*]
            <wbr />
            nucleng
            <wbr />
            .kyoto-u.ac.jp
          </td>
        </tr>
        <tr>
          <th><FormattedMessage id="office" /></th>
          <td><FormattedMessage id="address" /></td>
        </tr>
        <tr>
          <th><FormattedMessage id="phone" /></th>
          <td><FormattedMessage id="phone.number" /></td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Contact;
