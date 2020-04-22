import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from './components/auth/index.jsx';
import Dashboard from './components/dashboard/index.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/notes" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
