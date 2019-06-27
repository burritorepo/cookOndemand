import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Card, Row, Col, Icon, Button } from 'antd';

class DashboardRequest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match: { params: {id} } } = this.props;
    return (
      <div className="view view-request">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Inicio</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/user/request">Solicitudes</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Propuestas Cheffs</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="title c-primary">Propuestas Cheffs</h1>
        <br />
        <Row gutter={16}>
          <Col span={24}>
            <Card className="card request__card" title="Cheff Jonathan">
              <Row gutter={16}>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="user" className="c-primary" />
                    <span className="fsize-12">S/ 160.00 - S/ 180.00 / persona</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="mail" className="c-primary" />
                    <span className="fsize-12">1 mensaje</span>
                  </div>
                </Col>
              </Row>
              <div className="card__footer d-flex jc-space-between ai-center">
                <Icon type="delete" />
                <Button type="primary">
                  <NavLink to={`/user/request/${id}/jonathan`}>Ver</NavLink>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={24}>
            <Card className="card request__card" title="Cheff Luis">
              <Row gutter={16}>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="user" className="c-primary" />
                    <span className="fsize-12">S/ 160.00 - S/ 180.00 / persona</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="mail" className="c-primary" />
                    <span className="fsize-12">1 mensaje</span>
                  </div>
                </Col>
              </Row>
              <div className="card__footer d-flex jc-space-between ai-center">
                <Icon type="delete" />
                <Button type="primary">
                  <NavLink to={`/user/request/${id}/luis`}>Ver</NavLink>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export {
  DashboardRequest
}
