import React, { Component } from 'react';

class PresentationDetail extends Component {
  render() {
    const presentations = this.props.presentations;
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    let format = d => {
      let dp = d.split(/[^0-9]/);
      return new Intl.DateTimeFormat('en-US', options).format(new Date(dp[0], dp[1] - 1, dp[2]));
    };
    return presentations.map( (p, k) => (
        <li key={k}>
        {p.speaker}<br />
        "{p.title}" {p.id}<br />
        <a href={p.workshopUrl} target="_blank" rel="noopener noreferrer">
        {p.workshopName}
      </a>{(typeof p.workshopName !== "undefined") && <br />}
        @{p.place}<br />
        {format(p.date.from)} {(p.date.from !== p.date.to) && '- ' + format(p.date.to)}
      </li>
    )
                            );
  }
}

export default PresentationDetail;
