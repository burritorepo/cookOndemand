import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Breadcrumb, Card, Row, Col, Icon, Button } from 'antd';
import './request.scss';
class DashboardRequests extends Component {
  render() {
    return (
      <div className="view view-request">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Solicitudes</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="title c-primary">Mis Solicitudes</h1>
        <br/>
        <Row gutter={16}>
          <Col span={24}>
            <Card className="request__card" title="Solicitud 22/06/19">
              <Row gutter={16}>
                <Col span={12}>
                  <div className="request__item">
                    <Icon type="team" className="c-primary" />
                    <span className="request__detail">13 - 20 personas</span>
                  </div>
                  <div className="request__item">
                    <Icon type="hourglass" className="c-primary" />
                    <span className="request__detail">Cena</span>
                  </div>
                  <div className="request__item">
                    <Icon type="pushpin" className="c-primary" />
                    <span className="request__detail">Avenida José Pardo 600, Miraflores</span>
                  </div>
                  <div className="request__item">
                    <Icon type="check" className="c-primary" />
                    <span className="request__detail">Tienes 1 propuestas</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="request__item">
                    <Icon type="user" className="c-primary" />
                    <span className="request__detail">S/ 160.00 - S/ 180.00 / persona</span>
                  </div>
                  <div className="request__item">
                    <Icon type="fire" className="c-primary" />
                    <span className="request__detail">Comida Italiana</span>
                  </div>
                </Col>
              </Row>
              <div className="request__card__footer d-flex jc-space-between ai-center">
                <Icon type="delete" />
                <Button type="primary">
                  <NavLink to="/cheff/request-user">Ver propuestas</NavLink>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={24}>
            <Card className="request__card" title="Solicitud 22/06/19">
              <Row gutter={16}>
                <Col span={12}>
                  <div className="request__item">
                    <Icon type="team" className="c-primary"/>
                    <span className="request__detail">13 - 20 personas</span>
                  </div>
                  <div className="request__item">
                    <Icon type="hourglass" className="c-primary"/>
                    <span className="request__detail">Cena</span>
                  </div>
                  <div className="request__item">
                    <Icon type="pushpin" className="c-primary"/>
                    <span className="request__detail">Avenida José Pardo 600, Miraflores</span>
                  </div>
                  <div className="request__item">
                    <Icon type="check" className="c-primary"/>
                    <span className="request__detail">Tienes 1 propuestas</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="request__item">
                    <Icon type="user" className="c-primary"/>
                    <span className="request__detail">S/ 160.00 - S/ 180.00 / persona</span>
                  </div>
                  <div className="request__item">
                    <Icon type="fire" className="c-primary"/>
                    <span className="request__detail">Comida Italiana</span>
                  </div>
                </Col>
              </Row>
              <div className="request__card__footer d-flex jc-space-between ai-center">
                <Icon type="delete" />
                <Button type="primary">
                  <NavLink to="/cheff/request-user">Ver propuestas</NavLink>
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
  DashboardRequests
}
