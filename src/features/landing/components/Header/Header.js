import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TimelineLite, Power2, Back } from 'gsap';
import { connect } from 'react-redux';

import './header.scss';

export class Header extends Component {
  state = {
    isMobile: null
  };

  constructor(props) {
    super(props);
    console.log('this.firebase', this.props)
    this.js_header = React.createRef();
  }

  componentWillMount() {
    this.setState({
      isMobile: window.innerWidth < 1024
    });
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      () => {
        this.setState({
          isMobile: window.innerWidth < 1024
        });
      },
      false
    );

    const tl = new TimelineLite();

    tl.from(this.js_header.current, 1.5, {
      opacity: 0,
      y: -40,
      delay: 1.25,
      ease: Power2.easeInOut
    });
  }

  handleChange() {
    const { prevProps } = this.props;
    prevProps.history.push('/register');
  }

  getWindowWidth() {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }

  render() {
    return (
      <Fragment>
        <header>
          <div
            className='inner-header d-flex f-justify js_header'
            ref={this.js_header}
          >
            <div className='logo'>
              Cook <span>On</span> Demand
            </div>
            <nav className='header-nav'>
              <ul className='header-nav__list d-flex f-justify'>
                <li className='header-nav__item'>
                  <Link to='#' className='header-nav__link'>
                    <i className='fas fa-gift' />
                    Regala
                  </Link>
                </li>
                <li className='header-nav__item'>
                  <Link to='#' className='header-nav__link'>
                    <i className='fas fa-info-circle' />
                    ¿Cómo funciona?
                  </Link>
                </li>
                <li className='header-nav__item'>
                  <Link to='#' className='header-nav__link'>
                    <i className='fas fa-phone' />
                    +51 941 952 261
                  </Link>
                </li>
                <li className='header-nav__item'>
                  <Link to='/login' className='header-nav__link'>
                    <i className='fas fa-sign-in-alt' />
                    Acceder
                  </Link>
                </li>
                <button
                  className='nav__action'
                  onClick={() => this.handleChange()}
                >
                  <i className='fas fa-portrait' />
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

const mapStateToProps = (state) => ({
  firebase: state.firebase
})
export default connect(mapStateToProps)(Header);
