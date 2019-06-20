import React from "react";
import { Layout, Menu, Icon, Dropdown, Button } from 'antd';
import './header.scss';
const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      Mi cuenta
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="logout" />
      Salir
    </Menu.Item>
  </Menu>
);
function Header() {
  return (
    <Layout.Header className="header d-flex jc-space-between ai-center">
      <a href="">Logo</a>
      <Dropdown overlay={menu} >
        <Button><Icon type="user" /></Button>
      </Dropdown>
    </Layout.Header>
  )
}

export {
  Header
}
