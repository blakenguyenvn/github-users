import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  HomePage,
  PersonPage,
  NotFoundPage
} from './pages';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={HomePage}
    />
    <Route
      exact
      path="/person/:personName"
      component={PersonPage}
    />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
