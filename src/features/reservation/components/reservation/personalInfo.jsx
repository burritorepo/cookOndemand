import React, { Component, Fragment } from "react";
import { Input, Form, Button } from "antd";

class PersonalInfo extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit();
        this.props.next();
      }
    });
  };

  render() {
    const { handleChange } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <h1
          style={{ marginBottom: "20px", textAlign: "center", color: "white" }}
        >
          Ingresa tu información
        </h1>
        <Form onSubmit={this.handleSubmit} wrapperCol={{ span: 24 }}>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Ingresa tu nombre completo!" }
              ]
            })(
              <Input
                style={{ width: "100%", margin: "auto" }}
                onChange={handleChange("name")}
                placeholder="Ingrese tu nombre completo"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Ingresa un correo electrónico válido..."
                },
                { required: true, message: "Ingresa un correo valido!" }
              ]
            })(
              <Input
                style={{ width: "100%", margin: "auto" }}
                onChange={handleChange("email")}
                placeholder="Ingresa tu correo electrónico"
              />
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Ingresa una contraseña!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password placeholder="Ingresa una contraseña..." />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Confirma contraseña!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input.Password
                name="password"
                onChange={this.onChange}
                placeholder="Confirma contraseña..."
                onBlur={this.handleConfirmBlur}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Ingresa tu número de télefono!" }
              ]
            })(
              <Input
                style={{ width: "100%", margin: "auto" }}
                onChange={handleChange("phone")}
                addonBefore={"+51"}
                placeholder="Ingresa tu número de télefono"
              />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Siguiente
          </Button>
        </Form>
      </Fragment>
    );
  }
}
const WrappedPersonal = Form.create({ name: "personal_info" })(PersonalInfo);

export default WrappedPersonal;
