import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

class Cv extends React.Component {
render() {
const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <section id="cv" className="main">
        <h2>
          <a href="#cv">
            <i className="fa fa-graduation-cap"></i><FormattedMessage id="cv"/>
          </a>
        </h2>
        <h3><FormattedMessage id="curriculum.vitae"/></h3>
        <h4><FormattedMessage id="education"/></h4>
        <table>
          <tbody>
            <tr><th>2015/04-<wbr /><FormattedMessage id="present"/></th><td><FormattedMessage id="affiliation"/></td></tr>
            <tr><th>2011/04-<wbr />2015/03</th><td><FormattedMessage id="affiliation.ba"/></td></tr>
            <tr><th>2008/04-<wbr />2011/03</th><td><FormattedMessage id="affiliation.high"/></td></tr>
          </tbody>
        </table>
        <h4><FormattedMessage id="employment"/></h4>
        <table>
          <tbody>
            <tr><th>2018/04-<wbr /><FormattedMessage id="present"/></th><td><FormattedMessage id="jsps"/></td></tr>
          </tbody>
        </table>
        <h3><FormattedMessage id="staff"/></h3>
        <ol reversed="reversed">
          <li>
            <a href="https://sites.google.com/site/qikansai/past/24meeting" target="_blank" rel="noreferrer noopener">
              <FormattedMessage id="qikansai24"/>
            </a>
            &nbsp;<FormattedMessage id="organizer"/>
          </li>
          <li>
            <a href="https://cmpss.jp/forepast/ss2016/page/" target="_blank" rel="noreferrer noopener">
              <FormattedMessage id="cmpss61"/>
            </a>
            &nbsp;<FormattedMessage id="organizer"/>
          </li>
          <li>
            <a href="https://sites.google.com/site/qikansai/" target="_blank" rel="noreferrer noopener">
              <FormattedMessage id="qikansai"/>
            </a>
            &nbsp;<FormattedMessage id="assistant.leader"/>
          </li>
          <li>
            <a href="https://sites.google.com/site/qikansai/past/18meeting" target="_blank" rel="noreferrer noopener">
              <FormattedMessage id="qikansai18"/>
            </a>
            &nbsp;<FormattedMessage id="organizer"/>
          </li>
        </ol>
        <h3><FormattedMessage id="qualifications"/></h3>
        <ul className="fa-ul">
          <li><FormattedMessage id="ap"/></li>
        </ul>
        <h3><FormattedMessage id="award"/></h3>
        <ul className="fa-ul">
          <li><FormattedMessage id="goodspeaker"/></li>
        </ul>
      </section>

    </IntlProvider>
  );
}
}

export default Cv;
