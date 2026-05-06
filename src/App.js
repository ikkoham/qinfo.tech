import React from 'react';
import {
  HashRouter as Router, Route, Routes, useParams,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Head from './Head';
import Header from './Header';
import ResearchInterest from './ResearchInterest';
import Presentation from './Presentation';
import Publication from './Publication';
import Cv from './Cv';
import Contact from './Contact';
import Nav from './Nav';
import Footer from './Footer';

const AppContent = () => {
  const { lang } = useParams();
  const locale = lang === 'ja' ? 'ja' : 'en';
  const messages = require(`./locale/${locale}.json`);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div id="container">
        <Head />
        <Header />
        <Routes>
          <Route path="research_interest" element={<ResearchInterest />} />
          <Route path="publication" element={<Publication />} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="cv" element={<Cv />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={null} />
        </Routes>
        <Routes>
          <Route path=":link" element={<Nav />} />
          <Route path="*" element={<Nav />} />
        </Routes>
        <Footer />
      </div>
    </IntlProvider>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/:lang/*" element={<AppContent />} />
      <Route path="*" element={<AppContent />} />
    </Routes>
  </Router>
);

export default App;
