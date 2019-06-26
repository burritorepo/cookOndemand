import React, { Component, Fragment } from "react";
import { Input, Form, DatePicker, Button } from "antd";

class DetailsForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.next();
      }
    });
  };

  render() {
    const { handleChange, handleDate, prev } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;

    return (
      <Fragment>
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Ahora veamos algunos detalles
        </h1>
        <Form
          onSubmit={this.handleSubmit}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item label="Fecha">
            {getFieldDecorator("dateTime", {
              rules: [
                {
                  type: "object",
                  required: true,
                  message: "Seleccione la fecha"
                }
              ]
            })(<DatePicker onChange={handleDate.bind(this, "dateTime")} />)}
          </Form.Item>
          <Form.Item label="Alergias">
            {getFieldDecorator("restrictions", {
              rules: [{ required: false, message: "" }]
            })(
              <Input
                onChange={handleChange("restrictions")}
                placeholder="Ingrese alergias o intolerancia"
                style={{ marginBottom: "20px" }}
              />
            )}
          </Form.Item>
          <Form.Item label="Observaciones">
            {getFieldDecorator("obs", {
              rules: [
                {
                  required: false,
                  message: "Algún comentario u observación que desea agregar?"
                }
              ]
            })(
              <TextArea
                onChange={handleChange("obs")}
                placeholder="Algún comentario u observación que desea agregar?"
                style={{ marginBottom: "20px" }}
              />
            )}
          </Form.Item>
          <Button type="secondary" onClick={prev}>Anterior</Button>
          <Button type="primary" htmlType="submit">
            Siguiente
          </Button>
        </Form>
      </Fragment>
    );
  }
}
const WrappedApp = Form.create({ name: "details_form" })(DetailsForm);

export default WrappedApp;
