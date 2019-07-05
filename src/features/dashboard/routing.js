import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Layout } from 'antd';

import {
  DashboardHome,
  DashboardRequest,
  DashboardRequestDetail
} from './components';

import DashboardRequests from './components/requests/requests'

import Header from '../../components/header/header';1
import {
  Main,
  Footer
} from '../../components';

import Sidebar from '../../components/sidebar/sidebar'

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
              {/* <Route exact path={`${path}/home`} component={DashboardHome}></Route> */}
              <Route exact path={`${path}/request`} component={DashboardRequests}></Route>
              <Route exact path={`${path}/request/:id`} component={DashboardRequest}></Route>
              <Route exact path={`${path}/request/:id/:user`} component={DashboardRequestDetail}></Route>
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
  RoutingDashboard
}

