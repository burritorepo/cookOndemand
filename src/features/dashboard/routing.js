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
<<<<<<< HEAD
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
=======

  return (
    <React.Fragment>
      <Layout style={{height:'100vh'}}>
        <Header />
        <Layout>
          <Sidebar></Sidebar>
          <Main>            
            <Switch>
              <Route exact path={`${path}/request`} component={DashboardRequests}></Route>
              <Route exact path={`${path}/request-cheff`} component={DashboardRequestCheffs}></Route>
              <Route exact path={`${path}/request-cheff/:id`} component={DashboardRequestCheffDetail}></Route>
              <Redirect exact from={`${path}`} to={`${path}/request`} />
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
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

