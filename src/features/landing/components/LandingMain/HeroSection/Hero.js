import React, { Component, Fragment } from 'react';
import { TimelineLite, Power2 } from 'gsap';
import './Hero.scss';
import heroBanner from './img/hero-banner.jpg';

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.js_hero = React.createRef();
    this.js_title = React.createRef();
    this.js_text = React.createRef();
  }

  componentDidMount() {
    const tl = new TimelineLite();

    tl.from(this.js_hero.current, 2.5, {
      opacity: 0,
      delay: 0.5,
      ease: Power2.easeInOut
    });

    tl.from(
      this.js_title.current,
      0.5,
      {
        opacity: 0,
        x: -40,
        ease: Power2.easeOut
      },
      '-=1'
    );

    tl.from(
      this.js_text.current,
      0.5,
      {
        opacity: 0,
        x: 40,
        ease: Power2.easeOut
      },
      '-=1'
    );
  }

  render() {
    return (
      <Fragment>
        <div className='hero d-flex f-center js_hero' ref={this.js_hero}>
          <figure className='hero-overlay'>
            <img src={heroBanner} alt='' />
          </figure>
          <div className='hero-content d-flex'>
            <div className='hero-content__title js_title' ref={this.js_title}>
              <h2>Chef a Domicilio</h2>
            </div>
            <div className='hero-content__text js_text' ref={this.js_text}>
              <p>
                Disfruta de una experiencia gastronomica inolvidable en la
                comodidad de tu casa con un chef a tu servicio.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Hero;
