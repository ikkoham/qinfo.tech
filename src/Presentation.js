import React, { Component } from 'react';
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
      .filter(p => p.style === 'poster')
      .sort(this.sortedByDateDesc),
      summerSchool : res
      .filter(p => p.style === 'summerSchool')
      .sort(this.sortedByDateDesc),
      internationalOral : res
      .filter(p => p.style === 'oral' && p.officialLang === 'en')
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
if (Object.keys(this.state).length) {
return (
  <section id="presentation" className="main">
    <h2>
      <a href="/presentation">
        <i className="fa fa-bar-chart"></i>Presentation
      </a>
    </h2>
    <ul className="fa-ul">
      <li><i className="fa-li fa fa-university"></i>International (Oral)
        <ol reversed="reversed">
          <PresentationDetail presentations={this.state.presentation.internationalOral}/>
        </ol>
      </li>
    <li><i className="fa-li fa fa-university"></i>Domestic (Oral)
      <ol reversed="reversed">
        <PresentationDetail presentations={this.state.presentation.domesticOral}/>
      </ol>
    </li>
  <li><i className="fa-li fa fa-university"></i>Domestic (Poster)
    <ol reversed="reversed">
      <PresentationDetail presentations={this.state.presentation.domesticPoster}/>
    </ol>
  </li>
  <li><i className="fa-li fa fa-university"></i>Summer School
    <ol reversed="reversed">
      <PresentationDetail presentations={this.state.presentation.summerSchool}/>
    </ol>
  </li>
</ul>
        </section>
      );
}
return (
  <section id="presentation" className="main">
    <h2>
      <a href="/presentation">
        <i className="fa fa-bar-chart"></i>Presentation
      </a>
    </h2>
    <p>Now loading</p>
  </section>
);
}
}

export default Presentation;
