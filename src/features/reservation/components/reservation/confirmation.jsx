import React, { Component } from "react";
import { Button, Row, Col } from "antd";

class Confirmation extends Component {
  onClick = () => {
    this.props.next();
  };
  render() {
    const { values, prev } = this.props;
    return (
      <div className="confirmation">
        <h1 style={{ color: "white" }}>Confirma tu reserva</h1>
        <Row style={{ margin: "40px" }}>
          <Col span={8}>
            <h3 style={{ color: "#ff6700" }}>Dirección</h3>
            <p>{values.address}</p>
            <h3 style={{ color: "#ff6700" }}>N° de invitados</h3>
            <p>{values.pax}</p>
            <h3 style={{ color: "#ff6700" }}>Preferencia</h3>
            <p>{values.preferences}</p>
          </Col>
          <Col span={8}>
            <h3 style={{ color: "#ff6700" }}>Tipo de cocina</h3>
            <p>{values.energy}</p>
            <h3 style={{ color: "#ff6700" }}>N° de hornillas</h3>
            <p>{values.burners}</p>
            <h3 style={{ color: "#ff6700" }}>Horno</h3>
            <p>{values.oven}</p>
          </Col>
          <Col span={8}>
            <h3 style={{ color: "#ff6700" }}>Fecha</h3>
            <p>{values.dateTime}</p>
            <h3 style={{ color: "#ff6700" }}>Resticciones</h3>
            <p>{values.restrictions}</p>
            <h3 style={{ color: "#ff6700" }}>Observaciones</h3>
            <p>{values.obs}</p>
          </Col>
        </Row>
        <div
          style={{ display: "flex", justifyContent: "space-evenly" }}
          className="buttons"
        >
          <Button type="secondary" onClick={prev}>
            Anterior
          </Button>
          <Button type="primary" onClick={this.onClick}>
            Siguiente
          </Button>
        </div>
      </div>
    );
  }
}

export { Confirmation };
