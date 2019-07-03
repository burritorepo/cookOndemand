import React, { Component } from "react";
import { Layout, Menu, Icon, Dropdown, Button } from "antd";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { firebaseConnect } from "react-redux-firebase";
import "./header.scss";

class Header extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired
  };

  logout = () => {
    location.replace("#/login");
  };

  render() {
    const { firebase } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Icon type="user" />
          Mi cuenta
        </Menu.Item>
        <Menu.Item key="2" onClick={this.logout}>
          <Icon type="logout" />
          Salir
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout.Header className="header d-flex jc-space-between ai-center">
        <NavLink className="header__logo logo" to="/">
          Cook <span>on</span> Demand
        </NavLink>
        <Dropdown overlay={menu}>
          <Button>
            Hola Sebastian
            <Icon type="user" className="c-primary" />
          </Button>
        </Dropdown>
      </Layout.Header>
    );
  }
}

export default firebaseConnect()(Header);
