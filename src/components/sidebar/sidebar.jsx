import React from "react";
import { Layout, Menu } from 'antd';
import './sidebar.scss';

function Sidebar(props) {
  const { children } = props;

  return (
    <Layout.Sider className="sidebar">
      <Menu style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item>Solicitudes</Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export {
  Sidebar
}
