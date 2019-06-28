import React, { Component } from "react";
import { Button, Row, Col } from "antd";

class Confirmation extends Component {
  onClick = () => {
    console.log("submit", this.props.state);
    this.props.next();
  };
  render() {
    const { values, prev } = this.props;
    return (
      <div className="confirmation">
        <h1 style={{ color: "white" }}>Confirma tu reserva</h1>
        <Row>
          <Col span={8}>
            <h3 style={{ color: "white" }}>Dirección</h3>
            <p>{values.address}</p>
            <h3 style={{ color: "white" }}>N° de invitados</h3>
            <p>{values.pax}</p>
            <h3 style={{ color: "white" }}>Preferencia</h3>
            <p>{values.preferences}</p>
          </Col>
          <Col span={8}>
            <h3 style={{ color: "white" }}>Tipo de cocina</h3>
            <p>{values.energy}</p>
            <h3 style={{ color: "white" }}>N° de hornillas</h3>
            <p>{values.burners}</p>
            <h3 style={{ color: "white" }}>Horno</h3>
            <p>{values.oven}</p>
          </Col>
          <Col span={8}>
            <h3 style={{ color: "white" }}>Fecha</h3>
            <p>{values.dateTime}</p>
            <h3 style={{ color: "white" }}>Resticciones</h3>
            <p>{values.restrictions}</p>
            <h3 style={{ color: "white" }}>Observaciones</h3>
            <p>{values.obs}</p>
          </Col>
        </Row>
        <Button type="secondary" onClick={prev}>
          Anterior
        </Button>
        <Button type="primary" onClick={this.onClick}>
          Confirmar
        </Button>
      </div>
    );
  }
}

export { Confirmation };
