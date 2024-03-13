import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './page';

createRoot(document.getElementById('root')).render(
  <Router>
    <Switch>
      <Route path="/students" component={Page} />
    </Switch>
  </Router>
);

