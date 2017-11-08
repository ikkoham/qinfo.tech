import React, { Component } from 'react';

class PresentationDetail extends Component {
  render() {
    const presentations = this.props.presentations;
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    var format = (d) => new Intl.DateTimeFormat('en-US', options).format(Date.parse(d));
    return presentations.map( (p, k) => (
        <li key={k}>
        {p.speaker}<br />
        "{p.title}" {p.id}<br />
        <a href={p.workshopUrl} target="_blank">
        {p.workshopName}
      </a><br />
        @{p.place}<br />
        {format(p.date.from)} {(p.date.from !== p.date.to) && '- ' + format(p.date.to)}
      </li>
    )
                            );
  }
}

export default PresentationDetail;
