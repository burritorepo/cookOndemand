import React, { Component } from "react";
import { Breadcrumb, Card, Row, Col, Icon } from 'antd';

class DashboardRequests extends Component {
  render() {
    return (
      <div className="view-request">
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="">Tablero</Breadcrumb.Item>
          <Breadcrumb.Item>Solicitudes</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Solicitud 22/06/19">
              <Row gutter={16}>
                <Col span={12}>
                  <div>
                    <Icon type="team" />
                    13 - 20 personas
                  </div>
                  <div>
                    <Icon type="hourglass" />
                    Cena
                  </div>
                  <div>
                    <Icon type="pushpin" />
                    Avenida José Pardo 600, Miraflores
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Solicitud 22/06/19">Card content</Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export {
  DashboardRequests
}
