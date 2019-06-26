import React, { Component } from "react";
import { Link } from "react-router-dom";
class Success extends Component {
  render() {
    return (
      <div className="success">
        <h1>Reserva Confirmada</h1>
        <p>
          Tu chef se pondrá en contacto contigo lo antes posible para coordinar
          tu evento
        </p>
        <Link to="/home" type="primary">
          Volver al inicio
        </Link>
      </div>
    );
  }
}
export { Success };
