import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/en');
  require('@formatjs/intl-pluralrules/dist/locale-data/ja');
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
