import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Tabs } from 'antd';

function callback(key) {
  console.log(key);
}

class DashboardRequestDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      match: { params: { id } },
      match: { params: { user } } 
    } = this.props;
    return (
      <div className="view view-request-detail">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/cheff">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/cheff/request">Solicitudes</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Solicitud
          </Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="title c-primary">Solicitud de {id}</h1>
        <br />
      </div>
    )
  }
}

export {
  DashboardRequestDetail
}
