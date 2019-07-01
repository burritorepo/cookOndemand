import React, { Component } from "react";
import { Link } from "react-router-dom";
class Success extends Component {
  render() {
    return (
      <div className="success">
        <h1 style={{ color: "white" }}>Reserva Confirmada</h1>
        <p style={{ color: "white" }}>
          Tu chef se pondrá en contacto contigo lo antes posible para coordinar
          tu evento
        </p>
        <Link className="ant-btn ant-btn-primary" to="/home" type="primary">
          Volver al inicio
        </Link>
      </div>
    );
  }
}
export { Success };
