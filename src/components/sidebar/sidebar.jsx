import React from "react";
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './sidebar.scss';

function Sidebar(props) {
  const { children } = props;

  return (
    <Layout.Sider className="sidebar">
      <Menu style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item>
          <NavLink to="/dashboard/request" activeClassName="is-active ant-menu-item-selected">Solicitudes</NavLink>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export {
  Sidebar
}
