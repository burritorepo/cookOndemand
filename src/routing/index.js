import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

<<<<<<< HEAD
import {
=======
import { 
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
  WrappedLogin,
  Landing,
  RoutingDashboard,
  RoutingDashboardCheff,
  WrappedRegister,
<<<<<<< HEAD
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
        <Route path="/register" component={WrappedRegister} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export { RoutingRoot };
=======
  WrappedRegisterChef,
  Reservation,
} from '../features';

function RoutingRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/user" component={RoutingDashboard}></Route>
        <Route path="/cheff" component={RoutingDashboardCheff}></Route>
        <Route path="/reservation" component={Reservation} />
        <Route path="/landing" component={Landing}></Route>        
        <Route path="/login" component={WrappedLogin} />
        <Route path="/register" component={WrappedRegister} />
        <Route path="/register-chef" component={WrappedRegisterChef} />

        <Redirect exact from="/" to="/cheff" />
      </Switch>
    </Router>
  )
}

export {
  RoutingRoot
}

>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
