import React, { Component } from "react";
import { Form, Select, Input, Button } from 'antd';
import history from '../../../../api/history';
const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
    sessionStorage.clear();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        sessionStorage.clear();
        if (values.gender === 'user') {
          sessionStorage.setItem('type', 'user');
          history.replace('/user/request')
        } else {
          sessionStorage.setItem('type', 'cheff');
          history.replace('/cheff/request')
        }
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    // this.props.form.setFieldsValue({
    //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    // });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{height:'100vh'}} className="d-flex fd-column jc-center"  wrapperCol={{ offset: 6, span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input type="password" />)}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your type!' }],
          })(
            <Select
              placeholder="Seleccione el tipo de usuario"
              onChange={this.handleSelectChange}
            >
              <Option value="user">User</Option>
              <Option value="cheff">Cheff</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 11 }}>
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLogin = Form.create({ name: 'coordinated' })(App);

export {
  WrappedLogin
}
