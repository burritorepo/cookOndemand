import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Icon, Button, Row, Col } from 'antd';

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
        <div className="content">
          <h2>Solicitud 22/06/19</h2>
          <hr />
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <p>
                <Icon type="check" className="c-primary" />
                <span className="c-primary">Cantidad de personas</span>
              </p>
              <p><b>13 - 20</b></p>
            </Col>
            <Col span={12}>
              <p>
                <Icon type="check" className="c-primary" />
                <span className="c-primary">Tipo de cocina</span>
              </p>
              <p><b>Cocina a gas</b></p>
            </Col>
          </Row>
          <br/>
          <hr/>
          <br/>
          <div className="text-center">
            <Button type="primary">Tomar Solicitud</Button>
          </div>
        </div>
      </div>
    )
  }
}

export {
  DashboardRequestDetail
}
