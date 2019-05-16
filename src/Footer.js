import React from 'react';


class Footer extends React.Component {
render() {
return (
  <footer>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/ikkoham" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github-square fa-3x icon-github"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ikkoham" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter-square fa-3x icon-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/ikko.hamamura" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square fa-3x icon-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ikkoham/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram fa-3x icon-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ikkoham/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-3x icon-linkedin"></i>
          </a>
        </li>
      </ul>
    </nav>
    <small>
      <i className="fa fa-copyright"></i>
      2015-2019 Ikko Hamamura.
    </small>
  </footer>
);
}
}

export default Footer;
