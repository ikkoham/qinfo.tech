import React, { Component } from 'react';

class Publication extends Component {
  render() {
    return (
        <section id="publication">
        <h2>
        <a href="#publication"><i className="fa fa-book"></i>Publication</a>
        </h2>
        <ol reversed="reversed">
        <li>
        Relation between state-distinction power and disturbance in quantum measurements<br />
        I. Hamamura, T. Miyadera<br />
        arXiv: 1610.08814
      </li>
        </ol>
        </section>
    );
  }
}

export default Publication;
