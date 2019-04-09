import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

class Publication extends React.Component {
render() {
  const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <section id="publication" className="main">
        <h2>
          <a href="#publication"><i className="fa fa-file-o"></i><FormattedMessage id="publication"/></a>
        </h2>
        <ul className="fa-ul">
          <li>
            <i className="fa-li fa fa-diamond"></i><FormattedMessage id="original.papers"/>
            <ol reversed="reversed">
              <li>
                “Separability Criterion for Quantum Effects"<br />
                I. Hamamura<br />
                <a href="https://doi.org/10.1016/j.physleta.2018.06.043" target="_blank" rel="noopener noreferrer">Phys. Lett. A 382 (36) (2018)</a>
              </li>
              <li>
                Relation between state-distinction power and disturbance in quantum measurements<br />
                I. Hamamura, T. Miyadera<br />
                arXiv:1610.08814
              </li>
            </ol>
          </li>
          <li>
            <i className="fa-li fa fa-book"></i><FormattedMessage id="thesis"/>
            <ol reversed="reversed">
              <li>
                濵村 一航, “量子論における合成系の構造”, 物性研究・電子版, 物性研究刊行会, Vol. 6 No. 2, 062601, (2017).
                doi: <a href="https://dx.doi.org/10.14989/225170" target="_blank" rel="noopener noreferrer">10.14989/225170</a>
              </li>
            </ol>
          </li>
          <li>
            <i className="fa-li fa fa-book"></i><FormattedMessage id="kiyo"/>
            <ol reversed="reversed">
              <li>
                濵村一航「操作の両立不可能性と情報擾乱の関係」,
                数理解析研究所講究録, 京都大学数理解析研究所, 2059
                p.113-129 (2017).
              </li>
            </ol>
          </li>
        </ul>

      </section>
    </IntlProvider>
  );
}
}

export default Publication;
