import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export class Header extends Component {
  state = {
    isMobile: null
  };

  handleChange() {
    const { prevProps } = this.props;
    prevProps.history.push("/register");
  }

  getWindowWidth() {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }

  componentWillMount() {
    this.setState({
      isMobile: window.innerWidth < 1024
    });
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 1024
        });
      },
      false
    );
  }

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
                <button
                  className="nav__action"
                  onClick={() => this.handleChange()}
                >
                  <i className="fas fa-portrait" />
                  Registro Chef
                </button>
              </ul>
            </nav>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
