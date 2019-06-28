import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Breadcrumb, Card, Row, Col, Icon, Button, Modal } from 'antd';
class DashboardRequests extends Component {

  state = { visible: false }

  handleDelete = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className="view view-requests">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Inicio</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Solicitudes</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="title c-primary">Mis Solicitudes</h1>
        <br />
        <Row gutter={16}>
          <Col span={24}>
            <Card className="card request__card" title="Solicitud 22/06/19">
              <Row gutter={16}>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="team" className="c-primary" />
                    <span className="fsize-12">13 - 20 personas</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="hourglass" className="c-primary" />
                    <span className="fsize-12">Cena</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="pushpin" className="c-primary" />
                    <span className="fsize-12">Avenida José Pardo 600, Miraflores</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Tienes 1 propuestas</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="user" className="c-primary" />
                    <span className="fsize-12">S/ 160.00 - S/ 180.00 / persona</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="fire" className="c-primary" />
                    <span className="fsize-12">Comida Italiana</span>
                  </div>
                </Col>
              </Row>
              <div className="card__footer d-flex jc-space-between ai-center">
                <Icon type="delete" onClick={this.handleDelete} />
                <Button type="primary">
                  <NavLink to="/user/request/1">Ver propuestas</NavLink>
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
                  <div className="request__item mb-5">
                    <Icon type="team" className="c-primary" />
                    <span className="fsize-12">13 - 20 personas</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="hourglass" className="c-primary" />
                    <span className="fsize-12">Cena</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="pushpin" className="c-primary" />
                    <span className="fsize-12">Avenida José Pardo 600, Miraflores</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Tienes 1 propuestas</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="user" className="c-primary" />
                    <span className="fsize-12">S/ 160.00 - S/ 180.00 / persona</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="fire" className="c-primary" />
                    <span className="fsize-12">Comida Italiana</span>
                  </div>
                </Col>
              </Row>
              <div className="card__footer d-flex jc-space-between ai-center">
                <Icon type="delete" onClick={this.handleDelete}/>
                <Button type="primary">
                  <NavLink to="/user/request/1">Ver propuestas</NavLink>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <Modal
          title="Eliminar solicitud"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Estas seguro que deseas eliminar esta solicitud?</p>
        </Modal>
      </div>
    )
  }
}

export {
  DashboardRequests
}
