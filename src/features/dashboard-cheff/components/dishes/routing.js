import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Layout } from 'antd';

import {
} from './components';

import {
  Header,
  Main,
  Footer,
  Sidebar
} from '../../../../components';

const RoutingDishes = (prop) => {
  const { match: { path } } = prop;

  return (
    <React.Fragment>
      <Layout style={{height:'100vh'}}>
        <Header />
        <Layout>
          <Sidebar></Sidebar>
          <Main>            
            <Switch>
              
            </Switch>
          </Main>
        </Layout>
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export {
  RoutingDishes
}
