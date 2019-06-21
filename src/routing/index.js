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
  WrappedRegister,
  Reservation
} from '../features';

function RoutingRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/user" component={RoutingDashboard}></Route>

        <Route path="/reservation" component={Reservation} />
        <Route path="/landing" component={Landing}></Route>        
        <Route path="/login" component={WrappedLogin} />
        <Route path="/register" component={WrappedRegister} />
        <Redirect exact from="/" to="/user" />
      </Switch>
    </Router>
  )
}

export {
  RoutingRoot
}

