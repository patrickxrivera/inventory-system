import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomeContainer } from '../Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomeContainer} />
    </Switch>
  </Router>
);

export default App;
