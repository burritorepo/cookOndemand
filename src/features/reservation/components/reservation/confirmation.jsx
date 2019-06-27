import React, { Component } from "react";
import { Button, Row, Col } from "antd";

class Confirmation extends Component {
  onClick = () => {
    console.log("submit", this.props);
    this.props.next();
  };
  render() {
    const { values } = this.props;
    return (
      <div className="confirmation">
        <h1>Confirma tu reserva</h1>
        <Row>
          <Col span={8}>
            <h3>Dirección</h3>
            <p>{values.address}</p>
            <h3>N° de invitados</h3>
            <p>{values.pax}</p>
            <h3>Preferencia</h3>
            <p>{values.preferences}</p>
          </Col>
          <Col span={8}>
            <h3>Tipo de cocina</h3>
            <p>{values.energy}</p>
            <h3>N° de hornillas</h3>
            <p>{values.burners}</p>
            <h3>Horno</h3>
            <p>{values.oven}</p>
          </Col>
          <Col span={8}>
            <h3>Fecha</h3>
            <p>{values.dateTime}</p>
            <h3>Resticciones</h3>
            <p>{values.restrictions}</p>
            <h3>Observaciones</h3>
            <p>{values.obs}</p>
          </Col>
        </Row>
        <Button onClick={this.onClick}>Confirmar</Button>
      </div>
    );
  }
}

export { Confirmation };
