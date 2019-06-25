import React from "react";
<<<<<<< HEAD
import { Provider } from "react-redux";

import { RoutingRoot } from "./routing";
import { store } from "./store";
import "antd/dist/antd.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./assets/styles/main.scss";
=======
import { Provider } from 'react-redux';

import { RoutingRoot } from './routing';
import { store } from './store';
import 'antd/dist/antd.css';
import './assets/styles/main.scss';
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <RoutingRoot />
      </Provider>
    </div>
<<<<<<< HEAD
  );
}

export { App };
=======
  )
}

export {
  App
}

>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
