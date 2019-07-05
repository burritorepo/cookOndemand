import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

import { TimelineLite, Power2, Back } from "gsap";
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

    const tl = new TimelineLite();

    tl.from(this.js_header.current, 0.5, {
      opacity: 0,
      y: -40,
      delay: 0.5,
      ease: Power2.easeInOut
    });
  }

  handleLogout = e => {
    const { firebase } = this.props;

    console.log(firebase);
    firebase.logout();
  };

  userDashboard = () => {
    const { role } = this.props.user;

    if (role) {
      if (role === "client") {
        this.props.prevProps.history.push("/user");
      } else if (role === "chef") {
        this.props.prevProps.history.push("/cheff");
      }
    } else {
      console.log("loading...");
    }
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

    if (user.name) {
      let newName = user.name.split(" ")[0];
      console.log(newName);
    }

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
                {isAuthenticated ? (
                  <button
                    onClick={this.shrinkUsername}
                    className="nav__action__link"
                  >
                    <i className="fas fa-user-tie" />
                    {user.name
                      ? `Bienvenido ${user.name.split(" ")[0]}`
                      : "Bienvenido"}
                  </button>
                ) : (
                  <li className="header-nav__item">
                    <Link to="/login" className="header-nav__link">
                      <i className="fas fa-sign-in-alt" />
                      Acceder
                    </Link>
                  </li>
                )}
                {isAuthenticated ? (
                  <button
                    className="nav__action"
                    onClick={() => this.handleLogout()}
                  >
                    <i className="fas fa-portrait" />
                    Salir
                  </button>
                ) : (
                  <button
                    className="nav__action"
                    onClick={() => this.handleChange()}
                  >
                    <i className="fas fa-portrait" />
                    Registro Chef
                  </button>
                )}
              </ul>
            </nav>
          </div>
        </header>
      </Fragment>
    );
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
