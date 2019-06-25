import React, { Component, Fragment } from "react";
import { Radio, Select, Form } from "antd";

class KitchenForm extends Component {
  state = {};
  render() {
    const { values, handleChange, handleSelectChange } = this.props;
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Ahora queremos conocer un poco sobre tu cocina
        </h1>
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item label="Tipo de cocina">
            {getFieldDecorator("energy", {
              rules: [
                { required: true, message: "Selecciona tu tipo de cocina" }
              ]
            })(
              <Select
                setfieldsvalue={values.energy}
                placeholder="Selecciona tu tipo de cocina"
                onChange={handleSelectChange}
              >
                <Option value="gas">Gas</Option>
                <Option value="inducción">Inducción</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Hornillas">
            {getFieldDecorator("burners", {
              rules: [
                { required: true, message: "Selecciona el número de hornillas" }
              ]
            })(
              <Select
                setfieldsvalue={values.burners}
                placeholder="Selecciona el número de hornillas"
                onChange={handleSelectChange}
              >
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="¿Tienes horno?">
            {getFieldDecorator("oven")(
              <Radio.Group
                setfieldsvalue={values.oven}
                onChange={handleChange("burners")}
              >
                <Radio value="si">Sí</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}

const WrappedApp = Form.create({ name: "coordinated" })(KitchenForm);

export default WrappedApp;
