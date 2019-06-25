import React, { Component, Fragment } from "react";
import { Input, Select, Form, DatePicker } from "antd";

class DetailsForm extends Component {
  render() {
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    const { values, handleChange } = this.props;
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;

    return (
      <Fragment>
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Coméntanos un poco sobre tu evento
        </h1>
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item label="DatePicker">
            {getFieldDecorator("date-picker", config)(<DatePicker />)}
          </Form.Item>
          <Form.Item label="Alergias">
            {getFieldDecorator("restrictions", {
              rules: [{ required: false, message: "" }]
            })(
              <Input
                initialValue={values.restrictions}
                onValuesChange={handleChange("restrictions")}
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
                setfieldsvalue={values.address}
                onChange={handleChange("obs")}
                placeholder="Algún comentario u observación que desea agregar?"
                style={{ marginBottom: "20px" }}
              />
            )}
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}
const WrappedApp = Form.create({ name: "coordinated" })(DetailsForm);

export default WrappedApp;
