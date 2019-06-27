import React, { Component, Fragment } from "react";
import "./How.scss";
import howBanner from "./img/how-banner.jpg";
import howIngredient from "./img/how-ingredients-1.png";
import howHome from "./img/how-home-2.png";
import howMenu from "./img/how-menu-3.png";
import howClean from "./img/how-clean-4.png";

export class How extends Component {
  render() {
    return (
      <Fragment>
        <div className="how--section d-flex f-center">
          <figure className="how--section-overlay">
            <img src={howBanner} alt="" />
          </figure>
          <div className="how--section-content d-flex f-col">
            <div className="how--content-header">
              <h2>
                <span>¿ </span>Como funciona<span> ?</span>
              </h2>
            </div>
            <div className="how--card-wrapper d-flex">
              <div className="how--card d-flex f-center f-col">
                <figure>
                  <img src={howIngredient} alt="" />
                </figure>
                <p>Compramos los ingredientes</p>
              </div>
              <div className="how--card d-flex f-center f-col">
                <figure>
                  <img src={howHome} alt="" />
                </figure>
                <p>Cocinamos en tu casa</p>
              </div>
              <div className="how--card d-flex f-center f-col">
                <figure>
                  <img src={howMenu} alt="" />
                </figure>
                <p>Servimos el menu</p>
              </div>
              <div className="how--card d-flex f-center f-col">
                <figure>
                  <img src={howClean} alt="" />
                </figure>
                <p>¡Y dejamos todo impecable!</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default How;
