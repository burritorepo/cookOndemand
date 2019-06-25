import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Layout } from 'antd';

import {
  DashboardRequests,
  Home,
} from './components';

import {
  Header,
  Main,
  Footer,
  Sidebar
} from '../../components';

function RoutingDashboardCheff(prop) {
  const { match: { path } } = prop;

  return (
    <React.Fragment>
      <Layout style={{height:'100vh', padding:'64px 0px 60px'}}>
        <Header />
        <Layout>
          <Sidebar></Sidebar>
          <Main>
            <Switch>
              <Route exact path={`${path}/home`} component={Home}></Route>
              <Route exact path={`${path}/request`} component={DashboardRequests}></Route>
              {/* <Route exact path={`${path}/dishes`} component={RoutingDishes}></Route> */}
              {/* <Route exact path={`${path}/request-cheff`} component={DashboardRequestCheffs}></Route>
              <Route exact path={`${path}/request-cheff/:id`} component={DashboardRequestCheffDetail}></Route> */}
              <Redirect exact from={`${path}`} to={`${path}/request`} />
            </Switch>
          </Main>
        </Layout>
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export {
  RoutingDashboardCheff
}

