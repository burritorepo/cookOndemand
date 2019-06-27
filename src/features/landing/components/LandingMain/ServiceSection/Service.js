import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Service.scss";
import serviceBanner from "./img/service-banner.jpg";
import serviceHome from "./img/service-home-1.jpg";
import serviceVacation from "./img/service-vacation-2.jpg";
import servicePermanent from "./img/service-permanent-3.jpg";
import serviceShow from "./img/service-show-4.jpg";
import serviceMarketing from "./img/service-marketing-5.jpg";

export class Service extends Component {
  render() {
    return (
      <Fragment>
        <div className="service--section d-flex f-center">
          <figure className="service--section-overlay">
            <img src={serviceBanner} alt="" />
          </figure>
          <div className="service--section-content d-flex f-col">
            <div className="service--content-header">
              <h2>Servicios</h2>
              <p>Descubre toda nuestra gama de servicios.</p>
            </div>
            <div className="service--card-wrapper">
              <div className="service--card home d-flex f-center">
                <figure>
                  <img src={serviceHome} alt="" />
                </figure>
                <div className="card-content">
                  <h2>Chef a domicilio</h2>
                  <p>Un restaurante en casa</p>
                  <Link to="#" className="card-content__link">
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className="service--card vacation d-flex f-center">
                <figure>
                  <img src={serviceVacation} alt="" />
                </figure>
                <div className="card-content">
                  <h2>Chef para vacaciones</h2>
                  <p>Olvidate de cocinar</p>
                  <Link to="#" className="card-content__link">
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className="service--card permanent d-flex f-center">
                <figure>
                  <img src={servicePermanent} alt="" />
                </figure>
                <div className="card-content">
                  <h2>Chef permanente</h2>
                  <p>Encuentra el perfil que buscas</p>
                  <Link to="#" className="card-content__link">
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className="service--card show d-flex f-center">
                <figure>
                  <img src={serviceShow} alt="" />
                </figure>
                <div className="card-content">
                  <h2>Show Cooking</h2>
                  <p>Gastronomia en vivo</p>
                  <Link to="#" className="card-content__link">
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className="service--card campaign d-flex f-center">
                <figure>
                  <img src={serviceMarketing} alt="" />
                </figure>
                <div className="card-content">
                  <h2>Campañas de Marketing</h2>
                  <p>Regala un Chef</p>
                  <Link to="#" className="card-content__link">
                    Me interesa
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Service;
