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
  RoutingDashboardCheff,
  WrappedRegister,
  Reservation
} from "../features";

function RoutingRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/user" component={RoutingDashboard} />
        <Route path="/cheff" component={RoutingDashboardCheff} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={WrappedLogin} />
        <Route path="/register" component={WrappedRegister} />
        <Redirect exact from="/" to="/landing" />
      </Switch>
    </Router>
  );
}

export { RoutingRoot };
