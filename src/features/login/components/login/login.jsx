import React, { Component } from "react";
import { Form, Select, Input, Button } from 'antd';
const { Option } = Select;
import history from '../../../../api/history';
import firebase from '../../../../firebase/firebase';
class App extends Component {
  constructor(props) {
    super(props);
    sessionStorage.clear();
    
    // console.log('sebas', firebase.instance)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        sessionStorage.clear();
        if (values.type === 'user') {
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
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <div className="view view-login d-flex fd-column jc-center h-100vh">
          <div className="text-center mb-20">
            <a className="logo logo--medium">
              Cook <span>and</span> Demand
            </a>
          </div>
          <Form className="d-flex fd-column jc-center" wrapperCol={{ offset: 7, span: 10 }} onSubmit={this.handleSubmit}>
            <Form.Item >
              {getFieldDecorator('user', {
                rules: [{ required: true, message: 'Por favor ingresa tu usuario!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Por favor ingresa tu password!' }],
              })(<Input type="password" />)}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('type', {
                rules: [{ required: true, message: 'Please select your type!' }],
              })(
                <Select
                  placeholder="Seleccione el tipo de usuario"
                  onChange={this.handleSelectChange}
                >
                  <Option value="user">User</Option>
                  <Option value="cheff">Cheff</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit" block>
                Ingresar
          </Button>
            </Form.Item>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

const WrappedLogin = Form.create({ name: 'coordinated' })(App);

export {
  WrappedLogin
}
