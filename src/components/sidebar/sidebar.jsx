import React from "react";
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './sidebar.scss';

function ItemUser() {
  return (
    <React.Fragment>
      <Menu>
        <Menu.Item>
          <NavLink to="/user/home" activeClassName="is-active ant-menu-item-selected">Inicio</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/user/request" activeClassName="is-active ant-menu-item-selected">Solicitudes</NavLink>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  )
}

function ItemCheff() {
  return (
    <React.Fragment>
      <Menu>
        <Menu.Item>
          <NavLink to="/cheff/home" activeClassName="is-active ant-menu-item-selected">Inicio</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/cheff/request" activeClassName="is-active ant-menu-item-selected">Solicitudes</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/cheff/dishes" activeClassName="is-active ant-menu-item-selected">Agregar Plato</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/cheff/menu" activeClassName="is-active ant-menu-item-selected">Menú</NavLink>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  )
}

function Sidebar(props) {
  const { children } = props;
  return (
    <Layout.Sider className="sidebar">
      {(sessionStorage.getItem('type') === 'user') ? (
        <ItemUser />
      ) : (
          <ItemCheff />
        )}
    </Layout.Sider>
  )
}

export {
  Sidebar
}
