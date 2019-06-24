import React from "react";
import { Provider } from 'react-redux';

import { RoutingRoot } from './routing';
import { store } from './store';
import 'antd/dist/antd.css';
import './assets/styles/main.scss';

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <RoutingRoot />
      </Provider>
    </div>
  )
}

export {
  App
}

