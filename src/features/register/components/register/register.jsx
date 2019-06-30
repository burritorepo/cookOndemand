import React, { Component } from "react";
import { Form, Input, Button } from "antd";

class Register extends Component {
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

    const backGround = {
      height: "100vh",
      backgroundImage:
        "url('http://lavinyagrill.com/wp-content/uploads/2015/06/iStock_000046272610_Large.jpg')",
      backgroundRepeat: "noRepeat",
      backgroundSize: "cover"
    };
    console.log("state", this.state);

    return (
      <div className="view view-request" style={backGround}>
        <div
          className="opacity"
          style={{ height: "100vh", backgroundColor: "rgba(0,0,0,.5)" }}
        >
          <div
            className="container register"
            style={{ width: "50%", margin: "auto" }}
          >
            <h1
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: "40px"
              }}
            >
              Registro <span style={{ color: '#ff6700' }}>de</span> Chef
            </h1>
            <Form
              style={{ width: "70%", margin: "auto" }}
              // {...formItemLayout}
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
              <Form.Item
              // {...tailFormItemLayout}
              >
                <div className="button" style={{ textAlign: 'center' }}>
                  <Button type="primary" htmlType="submit">
                    Registrar
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedRegister = Form.create({ name: "register" })(Register);

export { WrappedRegister };
