import React, { Component, Fragment } from "react";
import "./Hero.scss";

export class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="hero d-flex f-center">
          <figure className="hero-overlay">
            <img
              src="https://d1zzxdyvtq79bu.cloudfront.net/bundles/tacfrontend/images/PE/header/homepage_header_w_1455.jpg"
              alt=""
            />
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
