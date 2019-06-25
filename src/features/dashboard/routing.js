import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Layout } from 'antd';

import {
  DashboardRequests,
  DashboardRequestCheffs,
  DashboardRequestCheffDetail
} from './components';

import {
  Header,
  Main,
  Footer,
  Sidebar
} from '../../components';

function RoutingDashboard(prop) {
  const { match: { path } } = prop;
  console.log('prop', prop)
  return (
    <React.Fragment>
      <Layout style={{ height: '100vh', padding: '64px 0px 60px' }}>
        <Header />
        <Layout>
          <Sidebar></Sidebar>
          <Main>
            <Switch>
              <Route exact path={`user/request`} component={DashboardRequests}></Route>
              <Route exact path={`${path}/request-cheff`} component={DashboardRequestCheffs}></Route>
              <Route exact path={`${path}/request-cheff/:id`} component={DashboardRequestCheffDetail}></Route>
              {/* <Redirect exact from={`${path}`} to={`${path}/request`} /> */}
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

