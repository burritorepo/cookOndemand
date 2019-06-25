import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="inner-header d-flex f-justify">
            <div className="logo">
              Cook <span>On</span> Demand
            </div>
            <nav className="header-nav">
              <ul className="header-nav__list d-flex f-justify">
                <li className="header-nav__item">
                  <Link to="#" className="header-nav__link">
                    <i className="fas fa-gift" />
                    Regala
                  </Link>
                </li>
                <li className="header-nav__item">
                  <Link to="#" className="header-nav__link">
                    <i className="fas fa-info-circle" />
                    ¿Cómo funciona?
                  </Link>
                </li>
                <li className="header-nav__item">
                  <Link to="#" className="header-nav__link">
                    <i className="fas fa-phone" />
                    +51 941 952 261
                  </Link>
                </li>
                <li className="header-nav__item">
                  <Link to="#" className="header-nav__link">
                    <i className="fas fa-sign-in-alt" />
                    Acceder
                  </Link>
                </li>
                <li className="header-nav__item nav__action">
                  <Link to="#" className="header-nav__link">
                    <i className="fas fa-portrait" />
                    Registro Chef
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
