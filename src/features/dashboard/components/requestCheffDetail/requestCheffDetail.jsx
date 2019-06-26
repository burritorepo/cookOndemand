import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Tabs } from 'antd';
import '../requests/request.scss';

function callback(key) {
  console.log(key);
}

class DashboardRequestCheffDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      match: { params: { id } },
      match: { params: { user } } 
    } = this.props;
    return (
      <div className="view view-request">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/user/request">Solicitudes</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to={`/user/request/${id}`}>Solicitudes Cheffs</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{user}</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="title c-primary">Propuestas del Cheff {user}</h1>
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
