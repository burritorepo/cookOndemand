import React, { Component } from "react";
import { Form, Input, Button } from "antd";

class RegisterChef extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        name: "",
        lastName1: "",
        lastName2: "",
        email: "",
        password: "",
        phone: "",
        confirmDirty: false
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    const { name, lastName1, lastName2, email, password, phone } = this.state;
    const values = { name, lastName1, lastName2, email, password, phone };
    console.log("submit", values);
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Las contraseñas deben ser iguales!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 24 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 16,
          offset: 8
        },
        sm: {
          span: 16,
          offset: 10
        }
      }
    };

    console.log("state", this.state);

    return (
      <div
        className="view view-request"
        style={{ width: "50%", margin: "auto" }}
      >
        <h1 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
          Registro de Chef
        </h1>
        <Form
          style={{ width: "70%", margin: "auto" }}
          {...formItemLayout}
          onSubmit={this.handleSubmit}
        >
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Ingresa tu nombre!"
                }
              ]
            })(
              <Input
                onChange={this.handleChange("name")}
                placeholder="Ingresa tu nombre..."
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("lastName1", {
              rules: [
                {
                  required: true,
                  message: "Ingresa tu apellido paterno!"
                }
              ]
            })(
              <Input
                onChange={this.handleChange("lastName1")}
                placeholder="Ingresa tu apellido paterno..."
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("lastName2", {
              rules: [
                {
                  required: true,
                  message: "Ingresa tu apellido materno!"
                }
              ]
            })(
              <Input
                onChange={this.handleChange("lastName2")}
                placeholder="Ingresa tu apellido materno..."
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
                {
                  required: true,
                  message: "Ingresa un correo electrónico válido!"
                }
              ]
            })(
              <Input
                onChange={this.handleChange("email")}
                placeholder="Ingresa un correo electrónico válido..."
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
                onChange={this.handleChange("password")}
                placeholder="Confirma contraseña..."
                onBlur={this.handleConfirmBlur}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "Ingresa un número de celular!"
                }
                // {
                //   type: "number",
                //   message: "Debe ser un número!"
                // }
              ]
            })(
              <Input
                onChange={this.handleChange("phone")}
                placeholder="Ingresa un número de celular..."
                addonBefore={"+51"}
                style={{ width: "100%" }}
              />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedRegisterChef = Form.create({ name: "register_chef" })(
  RegisterChef
);

export { WrappedRegisterChef };
