import React from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";

import Head from './Head';
import Header from './Header';
import ResearchInterest from './ResearchInterest';
import Presentation from './Presentation';
import Publication from './Publication';
import Cv from './Cv';
import Contact from './Contact';
import Nav from './Nav';
import Footer from './Footer';

class App extends React.Component {
render() {
return (
  <Router>
    <div id='container'>
      <Switch>
        <Route path="/:lang" component={Head} />
        <Route component={Head} />
      </Switch>
      <Switch>
        <Route path="/:lang" component={Header} />
        <Route component={Header} />
      </Switch>
      <Switch>
        <Route path="/:lang/research_interest" component={ResearchInterest} />
        <Route path="/:lang/publication" component={Publication} />
        <Route path="/:lang/presentation" component={Presentation} />
        <Route path="/:lang/cv" component={Cv} />
        <Route path="/:lang/contact" component={Contact} />
      </Switch>
      <Switch>
        <Route path="/:lang/:link" component={Nav}/>
        <Route path="/:lang" component={Nav}/>
        <Route component={Nav}/>
      </Switch>
      <Route component={Footer}/>
  </div>
</Router>
    );
}
}

export default App;
