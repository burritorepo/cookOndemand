import React, { Component, Fragment } from "react";
import { Input, Select, Form, Button } from "antd";

class EventForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.next()
      }
    });
  };

  render() {
    const {
      handleChange,
      handleSelectChange
    } = this.props;

    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Coméntanos un poco sobre tu evento
        </h1>
        <Form onSubmit={this.handleSubmit} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item label="Dirección">
            {getFieldDecorator("address", {
              rules: [
                { required: true, message: "Ingrese dirección del evento" }
              ]
            })(
              <Input
                onChange={handleChange("address")}
                placeholder="Ingrese dirección del evento"
                style={{ marginBottom: "20px" }}
              />
            )}
          </Form.Item>
          <Form.Item label="Invitados">
            {getFieldDecorator("pax", {
              rules: [
                { required: true, message: "Seleccione número de invitados" }
              ]
            })(
              <Select
                placeholder="Seleccione el número de invitados"
                onChange={handleSelectChange.bind(this, 'pax')}
              >
                <Option value="2">2</Option>
                <Option value="3 a 6">3 a 6</Option>
                <Option value="7 a 12">7 a 12</Option>
                <Option value="+13">+13</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Preferencias">
            {getFieldDecorator("preferences", {
              rules: [
                {
                  required: true,
                  message: "Seleccione un tipo de cocina de su preferencia"
                }
              ]
            })(
              <Select
                placeholder="Seleccione un tipo de cocina de su preferencia"
                onChange={handleSelectChange.bind(this, 'preferences')}
              >
                <Option value="criolla">Criolla</Option>
                <Option value="italiana">Italiana</Option>
                <Option value="marina">Marina</Option>
                <Option value="nikkei">Nikkei</Option>
                <Option value="china">China</Option>
                <Option value="india">India</Option>
                <Option value="española">Española</Option>
              </Select>
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
const WrappedApp = Form.create({ name: "event_form" })(EventForm);

export default WrappedApp;