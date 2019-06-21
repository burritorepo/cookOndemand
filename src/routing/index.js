import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { 
  WrappedLogin,
  Landing,
  RoutingDashboard,
  WrappedRegister
} from '../features';

function RoutingRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={RoutingDashboard}></Route>
        <Route path="/landing" component={Landing}></Route>
        <Route path="/login" component={WrappedLogin} />
        <Route path="/register" component={WrappedRegister} />
        <Redirect exact from="/" to="/dashboard" />
      </Switch>
    </Router>
  )
}

export {
  RoutingRoot
}

