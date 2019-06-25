import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Layout } from 'antd';

import {
<<<<<<< HEAD
  DashboardRequests,
  Home,
  RoutingDishes  
=======
  DashboardRequests
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
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
<<<<<<< HEAD
      <Layout style={{height:'100vh', padding:'64px 0px 60px'}}>
=======
      <Layout style={{height:'100vh'}}>
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
        <Header />
        <Layout>
          <Sidebar></Sidebar>
          <Main>            
            <Switch>
<<<<<<< HEAD
              <Route exact path={`${path}/home`} component={Home}></Route>
              <Route exact path={`${path}/request`} component={DashboardRequests}></Route>
              {/* <Route exact path={`${path}/dishes`} component={RoutingDishes}></Route> */}
=======
              <Route exact path={`${path}/request`} component={DashboardRequests}></Route>
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
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

