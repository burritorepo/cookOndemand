import React from "react";
import { Layout, Menu, Icon, Dropdown, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import './header.scss';

function logout() {
  location.replace('#/login')
}

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      Mi cuenta
    </Menu.Item>
    <Menu.Item key="2" onClick={logout}>
      <Icon type="logout" />
      Salir
    </Menu.Item>
  </Menu>
);

function Header() {
  return (
    <Layout.Header className="header d-flex jc-space-between ai-center">
      <NavLink className="header__logo logo" to="/">Cook <span>on</span> Demand</NavLink>
      <Dropdown overlay={menu} >
        <Button>Hola Sebastian<Icon type="user" className="c-primary"/></Button>
      </Dropdown>
    </Layout.Header>
  )
}

export {
  Header
}
