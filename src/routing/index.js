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
  WrappedRegisterUser,
  Reservation
} from "../features";
import history from '../api/history';

function RoutingRoot() {
  return (
    <Router history={history}>
      <Switch>
        {/* {(sessionStorage.getItem('type') === 'user') ? (
          <Route path="/user" component={RoutingDashboard} />
        ) : (
            <Route path="/cheff" component={RoutingDashboardCheff} />
          )} */}
        <Route path="/user" component={RoutingDashboard} />
        <Route path="/cheff" component={RoutingDashboardCheff} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/home" component={Landing} />
        <Route path="/login" component={WrappedLogin} />
        <Route path="/register-user" component={WrappedRegisterUser} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export { RoutingRoot };
