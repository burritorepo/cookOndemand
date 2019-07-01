import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Card, Button, Modal } from "antd";

class DashboardRequestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  confirm = () => {
    Modal.confirm({
      title: "Confirmar",
      content: "Deseas aceptar esta propuesta?",
      okText: "Aceptar",
      cancelText: "Cancelar"
    });
  };

  render() {
    const {
      match: {
        params: { id }
      },
      match: {
        params: { user }
      }
    } = this.props;
    return (
      <div className="view view-request-detail">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/user/request">Solicitudes</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to={`/user/request/${id}`}>Solicitudes Chefs</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{user}</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="title c-primary">Propuestas del Chef {user}</h1>
        <br />
        <div className="card">
          <Card bordered={false}>
            <h2>Solicitud 22/06/19</h2>
            <hr />
            <br />
            <div className="content" style={{ textAlign: "center" }}>
              <h3>Abreboca</h3>
              <h5 className="c-primary">
                Bruschetta de espárragos a la parmesana
              </h5>
              <p>
                Tostas de espárragos grillados gratinados con queso parmesano.
              </p>
              <h3>Entrada</h3>
              <h5 className="c-primary">Vitello tonatto</h5>
              <p>
                Láminas de asado de res cocido a baja temperatura con mayonesa
                de atún y alcaparras.
              </p>
              <h3>Fondo</h3>
              <h5 className="c-primary">Spaghetti frutti di mare</h5>
              <p>
                Spaghetti salteados con aceite de oilva, ajo, mejillones y
                langostinos.
              </p>
              <h3>Postre</h3>
              <h5 className="c-primary">Panna Cotta</h5>
              <p>
                Mousse de crema de leche saborizada con mermelada de frutos
                rojos.
              </p>
            </div>
            <hr />
            <br />
            <div
              className="button"
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <Button type="secondary">
                <NavLink to="/user/request/1">Volver a propuestas</NavLink>
              </Button>
              <Button type="primary" onClick={this.confirm}>
                Aceptar propuesta
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export { DashboardRequestDetail };
