import React from "react";
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './sidebar.scss';

function ItemUser() {
  return (
    <React.Fragment>
      <Menu.Item>
        <NavLink to="/user/request" activeClassName="is-active ant-menu-item-selected">Solicitudes</NavLink>
      </Menu.Item>
    </React.Fragment>
  )
}

function ItemCheff() {
  return (
    <React.Fragment>
      <Menu.Item>
        <NavLink to="/cheff/home" activeClassName="is-active ant-menu-item-selected">Inicio</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/cheff/dishes" activeClassName="is-active ant-menu-item-selected">Agregar Plato</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/cheff/menu" activeClassName="is-active ant-menu-item-selected">Menú</NavLink>
      </Menu.Item>
    </React.Fragment>
  )
}

function Sidebar(props) {
  const { children } = props;
  return (
    <Layout.Sider className="sidebar">
      {/* <Menu >
        {(sessionStorage.getItem('type') === 'user') ? (
          <Menu.Item>
            <NavLink to="/user/request" activeClassName="is-active ant-menu-item-selected">Solicitudes</NavLink>
          </Menu.Item>
        ) : (
            <Menu.Item>
              <NavLink to="/cheff/home" activeClassName="is-active ant-menu-item-selected">Inicio</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/cheff/dishes" activeClassName="is-active ant-menu-item-selected">Agregar Plato</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/cheff/menu" activeClassName="is-active ant-menu-item-selected">Menú</NavLink>
            </Menu.Item>
          )}
      </Menu> */}
      {(sessionStorage.getItem('type') === 'user') ? (
        <Menu>
          <Menu.Item>
            <NavLink to="/user/request" activeClassName="is-active ant-menu-item-selected">Solicitudes</NavLink>
          </Menu.Item>
        </Menu>
      ) : (
      <Menu>
        <Menu.Item>
          <NavLink to="/cheff/home" activeClassName="is-active ant-menu-item-selected">Inicio</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/cheff/dishes" activeClassName="is-active ant-menu-item-selected">Agregar Plato</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/cheff/menu" activeClassName="is-active ant-menu-item-selected">Menú</NavLink>
        </Menu.Item>
      </Menu>
      )}
    </Layout.Sider>
  )
}

export {
  Sidebar
}
