import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/dashboard/index.jsx';
import Auth from './components/auth/index.jsx';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/notes" component={Dashboard} />
      <Route path="/" component={Auth} />
      </Switch>
   </Router>
  );
}

export default App;
