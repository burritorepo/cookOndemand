import React, { Component, Fragment } from "react";
import { TimelineLite } from "gsap";
import "./Hero.scss";
import heroBanner from "./img/hero-banner.jpg";

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.js_hero = React.createRef();
  }

  componentDidMount() {
    const tl = new TimelineLite();

    tl.to(this.js_hero.current, 2.5, { opacity: 1, delay: 0.5 });
  }

  render() {
    return (
      <Fragment>
        <div className="hero d-flex f-center js_hero" ref={this.js_hero}>
          <figure className="hero-overlay">
            <img src={heroBanner} alt="" />
          </figure>
          <div className="hero-content d-flex">
            <div className="hero-content__title">
              <h2>Chef a Domicilio</h2>
            </div>
            <div className="hero-content__text">
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
