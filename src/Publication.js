import React, { Component } from 'react';

class Publication extends Component {
  render() {
    return (
        <section id="publication" className="main">
          <h2>
            <a href="#publication"><i className="fa fa-file-o"></i>Publication</a>
          </h2>
          <ul className="fa-ul">
            <li>
              <i className="fa-li fa fa-diamond"></i>Original Papers
              <ol reversed="reversed">
                <li>
                  Separability Criterion for Quantum Effects<br />
                  I. Hamamura<br />
                  arXiv:1709.07987
                </li>
                <li>
                  Relation between state-distinction power and disturbance in quantum measurements<br />
                  I. Hamamura, T. Miyadera<br />
                  arXiv:1610.08814
                </li>
              </ol>
            </li>
            <li>
              <i className="fa-li fa fa-book"></i>Thesis
              <ol reversed="reversed">
                <li>
                  濵村 一航, “量子論における合成系の構造”, 物性研究・電子版, 物性研究刊行会, Vol. 6 No. 2, 062601, (2017).
                  doi: <a href="https://dx.doi.org/10.14989/225170" target="_blank" rel="noopener noreferrer">10.14989/225170</a>
                </li>
              </ol>
            </li>
          </ul>
        </section>
    );
  }
}

export default Publication;
