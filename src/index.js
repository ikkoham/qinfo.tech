import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/en');
  require('@formatjs/intl-pluralrules/dist/locale-data/ja');
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App />,
);
