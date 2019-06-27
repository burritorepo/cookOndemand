import React, { Component, Fragment } from "react";
import "./Chef.scss";
import chefBanner from "./img/chef-banner.jpg";
import chefProfile from "./img/chef-profile.jpg";

export class Chef extends Component {
  render() {
    return (
      <Fragment>
        <div className="chef--section d-flex f-center">
          <figure className="chef--section-overlay">
            <img src={chefBanner} alt="" />
          </figure>
          <div className="chef--section-content d-flex">
            <div className="chef--section-content__title">
              <h2>Nuestros Chefs</h2>
            </div>
            <div className="chef--section-content__text d-flex f-col">
              <figure>
                <img src={chefProfile} alt="" />
              </figure>
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

export default Chef;
