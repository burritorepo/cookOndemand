import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Layout } from 'antd';

import {
  DashboardHome,
  DashboardRequests,
  DashboardRequest,
  DashboardRequestDetail
} from './components';

import {
  Header,
  Main,
  Footer,
  Sidebar
} from '../../components';

function RoutingDashboard(prop) {
  const { match: { path } } = prop;

  return (
    <React.Fragment>
      <Layout style={{ height: '100vh', padding: '64px 0px 60px' }}>
        <Header />
        <Layout>
          <Sidebar></Sidebar>
          <Main>
            <Switch>
              <Route exact path={`${path}/home`} component={DashboardHome}></Route>
              <Route exact path={`${path}/request`} component={DashboardRequests}></Route>
              <Route exact path={`${path}/request/:id`} component={DashboardRequest}></Route>
              <Route exact path={`${path}/request/:id/:user`} component={DashboardRequestDetail}></Route>
              <Redirect exact from={`${path}`} to={`${path}/home`} />
            </Switch>
          </Main>
        </Layout>
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export {
  RoutingDashboard
}

