import React, { Component } from "react";
<<<<<<< HEAD
import { Form, Select, Input, Button } from 'antd';
import history from '../../../../api/history';
const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
    sessionStorage.clear();
=======
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
<<<<<<< HEAD
        sessionStorage.clear();
        if (values.gender === 'user') {
          sessionStorage.setItem('type', 'user');
          history.replace('/user/request')
        } else {
          sessionStorage.setItem('type', 'cheff');
          history.replace('/cheff/request')
        }
=======
        console.log('Received values of form: ', values);
        location.replace('#/dashboard')
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
      }
    });
  };

<<<<<<< HEAD
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
=======
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form style={{ height: '100vh' }} className="d-flex jc-center ai-center fd-column" layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

<<<<<<< HEAD
const WrappedLogin = Form.create({ name: 'coordinated' })(App);
=======
const WrappedLogin = Form.create({ name: 'login' })(Login);
>>>>>>> e10897d3e82aa9f7b3aa32b8879b5bee1fa38b4d

export {
  WrappedLogin
}
