import React from "react";
import { Button, Row, Col } from "antd";

const Confirmation = props => {
  const {
    address,
    pax,
    preferences,
    energy,
    burners,
    oven,
    dateTime,
    restrictions,
    obs
  } = props;

  return (
    <div className="confirmation">
      <h1>Confirma tu reserva</h1>
      <Row>
        <Col span={8}>
          <h3>Dirección</h3>
          <p>{address}</p>
          <h3>N° de invitados</h3>
          <p>{pax}</p>
          <h3>Preferencia</h3>
          <p>{preferences}</p>
        </Col>
        <Col span={8}>
          <h3>Tipo de cocina</h3>
          <p>{energy}</p>
          <h3>N° de hornillas</h3>
          <p>{burners}</p>
          <h3>Horno</h3>
          <p>{oven}</p>
        </Col>
        <Col span={8}>
          <h3>Fecha</h3>
          {/* <p>{dateTime}</p> */}
          <h3>Resticciones</h3>
          <p>{restrictions}</p>
          <h3>Observaciones</h3>
          <p>{obs}</p>
        </Col>
      </Row>

      <Button>Confirmar</Button>
    </div>
  );
};

export { Confirmation };
