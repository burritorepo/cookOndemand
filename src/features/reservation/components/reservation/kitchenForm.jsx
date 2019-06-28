import React, { Component, Fragment } from "react";
import { Radio, Select, Form, Button } from "antd";

class KitchenForm extends Component {
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
    const { handleSelectChange, handleRatio, prev } = this.props;
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <h1 style={{ marginBottom: "40px", textAlign: "center", color: 'white' }}>
          ¿Como es tu cocina?
        </h1>
        <Form onSubmit={this.handleSubmit} wrapperCol={{ span: 24 }}>
          <Form.Item>
            {getFieldDecorator("energy", {
              rules: [
                { required: true, message: "Selecciona tu tipo de cocina" }
              ]
            })(
              <Select
                placeholder="Selecciona tu tipo de cocina"
                onChange={handleSelectChange.bind(this, 'energy')}
              >
                <Option value="gas">Gas</Option>
                <Option value="inducción">Inducción</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("burners", {
              rules: [
                { required: true, message: "Selecciona el número de hornillas" }
              ]
            })(
              <Select
                placeholder="Selecciona el número de hornillas"
                onChange={handleSelectChange.bind(this, 'burners')}
              >
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item style={{ marginBottom: '20px' }}>
            {getFieldDecorator("oven", {
              rules: [
                { required: true, message: "Completa el campo" }
              ]
            })(
              <Radio.Group
                onChange={handleRatio.bind(this, 'oven')}
              >
                <Radio style={{ color: 'white' }} value="si">Sí</Radio>
                <Radio style={{ color: 'white' }} value="no">No</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="buttons"
          >
            <Button type="secondary" onClick={prev}>
              Anterior
            </Button>
            <Button type="primary" htmlType="submit">
              Siguiente
            </Button>
          </div>
        </Form>
      </Fragment>
    );
  }
}

const WrappedApp = Form.create({ name: "kitchen_form" })(KitchenForm);

export default WrappedApp;
