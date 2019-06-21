import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Tabs } from 'antd';
import '../requests/request.scss';

function callback(key) {
  console.log(key);
}

class DashboardRequestCheffDetail extends Component {
  render() {
    return (
      <div className="view view-request">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/dashboard">Tablero</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/dashboard/request-cheff">Solicitudes Cheffs</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Jose Luis</Breadcrumb.Item>
        </Breadcrumb>
        <br/>
        <h1 className="title">Propuestas del Cheff Jose Luis</h1>
        <br />
        <Tabs defaultActiveKey="1" onChange={callback}>
          <Tabs.TabPane tab="La propuesta" key="1">
            Content of Tab Pane 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mensajes" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="El Chef" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
          <Tabs.TabPane tab="¿Cómo funciona?" key="4">
            Content of Tab Pane 4
          </Tabs.TabPane>
        </Tabs>,
      </div>
    )
  }
}

export {
  DashboardRequestCheffDetail
}
