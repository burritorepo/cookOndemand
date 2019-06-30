import React, { Component, Fragment } from "react";
import { Button, Input } from "antd";

class ProposalInputs extends Component {
  onClick = () => {
    this.props.next();
  };
  render() {
    const { TextArea } = Input;
    const { handleChange } = this.props;

    return (
      <Fragment>
        <div onSubmit={this.onSubmit} style={{ width: "50%", margin: "auto" }}>
          <h3 style={{ textAlign: "center", color: "#ff6700" }}>Abreboca</h3>
          <Input
            onChange={handleChange("starter")}
            style={{ marginBottom: "20px" }}
            placeholder="Ingresa un abreboca..."
          />
          <TextArea
            onChange={handleChange("starter_desc")}
            style={{ marginBottom: "20px" }}
            placeholder="Añade una descripción del abreboca..."
          />
          <h3 style={{ textAlign: "center", color: "#ff6700" }}>Entrada</h3>
          <Input
            onChange={handleChange("entry")}
            style={{ marginBottom: "20px" }}
            placeholder="Ingresa una entrada..."
          />
          <TextArea
            onChange={handleChange("entry_desc")}
            style={{ marginBottom: "20px" }}
            placeholder="Añade una descripción de la entrada..."
          />
          <h3 style={{ textAlign: "center", color: "#ff6700" }}>Fondo</h3>
          <Input
            onChange={handleChange("main")}
            style={{ marginBottom: "20px" }}
            placeholder="Ingresa un plato de fondo..."
          />
          <TextArea
            onChange={handleChange("main_desc")}
            style={{ marginBottom: "20px" }}
            placeholder="Añade una descripción del plato de fondo..."
          />
          <h3 style={{ textAlign: "center", color: "#ff6700" }}>Postre</h3>
          <Input
            onChange={handleChange("dessert")}
            style={{ marginBottom: "20px" }}
            placeholder="Ingresa un postre..."
          />
          <TextArea
            onChange={handleChange("dessert_desc")}
            style={{ marginBottom: "20px" }}
            placeholder="Añade una descripción del postre..."
          />
        </div>
        <br />
        <hr />
        <div className="text-center">
          <Button type="primary" onClick={this.onClick}>
            Siguiente
          </Button>
        </div>
      </Fragment>
    );
  }
}

export { ProposalInputs };
