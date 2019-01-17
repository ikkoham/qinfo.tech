import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addLocaleData} from 'react-intl';
import ja from "react-intl/locale-data/ja";
import en from "react-intl/locale-data/en";


addLocaleData([...ja, ...en]);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
