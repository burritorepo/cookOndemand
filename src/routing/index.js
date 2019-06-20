import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { 
  Login,
  Landing,
  RoutingDashboard
} from '../features';

function RoutingRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={RoutingDashboard}></Route>
        <Route path="/landing" component={Landing}></Route>
        <Route path="/login" component={Login} />
        <Redirect exact from="/" to="/dashboard" />
      </Switch>
    </Router>
  )
}

export {
  RoutingRoot
}

