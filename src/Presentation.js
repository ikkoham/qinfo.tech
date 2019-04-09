import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import PresentationDetail from './PresentationDetail';

class Presentation extends Component {
constructor(props) {
super(props);
  this.state = {};
  fetch(process.env.PUBLIC_URL + '/api/presentation.json')
    .then(res => res.json())
    .then(res => this.setState({
    presentation : {
    domesticOral : res
      .filter(p => p.style === 'oral' && p.officialLang === 'ja')
      .sort(this.sortedByDateDesc),
      domesticPoster : res
      .filter(p => p.style === 'poster' && p.officialLang === 'ja')
      .sort(this.sortedByDateDesc),
      summerSchool : res
      .filter(p => p.style === 'summerSchool')
      .sort(this.sortedByDateDesc),
      internationalOral : res
      .filter(p => p.style === 'oral' && p.officialLang === 'en')
      .sort(this.sortedByDateDesc),
      internationalPoster : res
      .filter(p => p.style === 'poster' && p.officialLang === 'en')
      .sort(this.sortedByDateDesc),
      seminar : res
      .filter(p => p.style === 'seminar')
      .sort(this.sortedByDateDesc)
    }
    })
    );
}

sortedByDateDesc(a, b) {
  let split_a = a.date.from.split(/[^0-9]/);
  let split_b = b.date.from.split(/[^0-9]/);
  let parsedDateA = new Date(split_a[0], split_a[1] - 1, split_b[2]);
  let parsedDateB = new Date(split_b[0], split_b[1] - 1, split_b[2]);
  if (parsedDateA < parsedDateB) {
  return 1;
  }
  if (parsedDateA > parsedDateB) {
  return -1;
  }
  return 1;
}

render() {
const locale = this.props.match.params.lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);
  if (Object.keys(this.state).length) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <section id="presentation" className="main">
        <h2>
          <a href="/presentation">
            <i className="fa fa-bar-chart"></i><FormattedMessage id="presentation"/>
          </a>
        </h2>
        <ul className="fa-ul">
          <li><i className="fa-li fa fa-university"></i><FormattedMessage id="international.oral"/>
            <ol reversed="reversed">
              <PresentationDetail presentations={this.state.presentation.internationalOral}/>
            </ol>
          </li>
          <li><i className="fa-li fa fa-university"></i><FormattedMessage id="international.poster"/>
            <ol reversed="reversed">
              <PresentationDetail presentations={this.state.presentation.internationalPoster}/>
            </ol>
          </li>
          <li><i className="fa-li fa fa-university"></i><FormattedMessage id="domestic.oral"/>
            <ol reversed="reversed">
              <PresentationDetail presentations={this.state.presentation.domesticOral}/>
            </ol>
          </li>
          <li><i className="fa-li fa fa-university"></i><FormattedMessage id="domestic.poster"/>
            <ol reversed="reversed">
              <PresentationDetail presentations={this.state.presentation.domesticPoster}/>
            </ol>
          </li>
          <li><i className="fa-li fa fa-university"></i><FormattedMessage id="summer.school"/>
            <ol reversed="reversed">
              <PresentationDetail presentations={this.state.presentation.summerSchool}/>
            </ol>
          </li>
          <li><i className="fa-li fa fa-university"></i><FormattedMessage id="seminar"/>
            <ol reversed="reversed">
              <PresentationDetail presentations={this.state.presentation.seminar}/>
            </ol>
          </li>
        </ul>
      </section>
    </IntlProvider>
  );
  }
  return (
    <IntlProvider locale={locale} messages={messages}>
      <section id="presentation" className="main">
        <h2>
          <a href="/presentation">
            <i className="fa fa-bar-chart"></i><FormattedMessage id="presentation"/>
          </a>
        </h2>
        <p>Now loading</p>
      </section>
    </IntlProvider>
  );
}
}

export default Presentation;
