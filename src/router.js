//=================
// Router Component
//=================

import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Custom Components
import App from './components/App';
import About from './components/home/About';
import Projects from './components/projects/Projects';
import SpTemplate from './components/projects/SpTemplate';
import SpContainer from './components/projects/SpContainer';
import AvalaibleSoon from './components/projects/AvalaibleSoon';
import NotFound from './components/notfound/NotFound';
import SpContent from './data/SinglePC';



// Routes
const Routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={About} />
      <Route path="projects" component={Projects} />
        <Route path="Paysagiste" component={SpContainer} Hline="Project One" data={SpContent.Projectone} />
        <Route path="Reb" component={AvalaibleSoon} title="Soon" txt="The page will be available soon" />
        <Route path="Yogin" component={AvalaibleSoon} title="Soon" txt="The page will be available soon" />
      <Route path="*" component={NotFound} title="404" txt="Sorry, the page is not found"/>
    </Route>
  </Router>
);


export default Routes;
