/*=================
 Router Component
=================*/

// @flow
import React from 'react';
import { Router, Route, browserHistory} from 'react-router';

// Custom Components
import App from './components/App';
import About from './components/home/About';
import WebExp from './components/projects/WebExp';
import Contact from './components/contact/Contact';
import NotFound from './components/notfound/NotFound';



// Routes
const Routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={About} />
      <Route path="WebExp" component={WebExp} />
      <Route path="Contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
