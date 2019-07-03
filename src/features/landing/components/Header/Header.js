import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

import { TimelineLite, Power2, Back } from "gsap";
import Spinner from "../../../../components/spinner/Spinner";
import "./header.scss";

export class Header extends Component {
  state = {
    isMobile: null,
    isAuthenticated: true
  };

  static propTypes = {
    firebase: PropTypes.object.isRequired
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  constructor(props) {
    super(props);
    this.js_header = React.createRef();
  }

  componentDidMount() {
    const { isAuthenticated } = this.state;

    this.setState({
      isMobile: window.innerWidth < 1024
    });

    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 1024
        });
      },
      false
    );

    if (isAuthenticated) {
      const tl = new TimelineLite();

      tl.from(this.js_header.current, 1.5, {
        opacity: 0,
        y: -40,
        delay: 1.25,
        ease: Power2.easeInOut
      });
    }
  }

  handleLogout = e => {
    e.preventDefault();
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

  render() {
    const { isAuthenticated } = this.state;
    const { user } = this.props;

    console.log(isAuthenticated);

    const authLinks = (
      <ul className="header-nav__list d-flex f-justify">
        <li className="header-nav__item">
          <Link to="/user" className="header-nav__link">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </Link>
        </li>
        <button className="nav__action" onClick={this.handleLogout}>
          <i className="fas fa-portrait" />
          Registro Chef
        </button>
      </ul>
    );

    const guestLinks = (
      <ul className="header-nav__list d-flex f-justify">
        <li className="header-nav__item">
          <Link to="/login" className="header-nav__link">
            <i className="fas fa-sign-in-alt" />
            Acceder
          </Link>
        </li>
        <button className="nav__action" onClick={() => this.handleChange()}>
          <i className="fas fa-portrait" />
          Registro Chef
        </button>
      </ul>
    );

    if (isAuthenticated) {
      return (
        <Fragment>
          <header>
            <div
              className="inner-header d-flex f-justify js_header"
              ref={this.js_header}
            >
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
                </ul>
              </nav>
            </div>
            {isAuthenticated ? authLinks : guestLinks}
          </header>
        </Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = (state, props) => ({
  auth: state.firebase.auth,
  user: state.firebase.profile
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(Header);
