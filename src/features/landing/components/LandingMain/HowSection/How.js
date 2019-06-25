import React, { Component, Fragment } from "react";
import "./How.scss";

export class How extends Component {
  render() {
    return (
      <Fragment>
        <div className="how--section d-flex f-center">
          <figure className="how--section-overlay">
            <img
              src="https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?cs=srgb&dl=dinner-egg-flatlay-54455.jpg&fm=jpg"
              alt=""
            />
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
                  <img
                    src="https://image.flaticon.com/icons/png/512/291/291893.png"
                    alt=""
                  />
                </figure>
                <p>Compramos los ingredientes</p>
              </div>
              <div className="how--card d-flex f-center f-col">
                <figure>
                  <img
                    src="https://library.kissclipart.com/20180903/cqe/kissclipart-kitchen-restaurant-icon-clipart-food-restaurant-cl-d916a81df20bbca7.png"
                    alt=""
                  />
                </figure>
                <p>Cocinamos en tu casa</p>
              </div>
              <div className="how--card d-flex f-center f-col">
                <figure>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/kitchen-and-cooking/512/serving_food_tray_plate_restaurant_service_flat_design_icon-512.png"
                    alt=""
                  />
                </figure>
                <p>Servimos el menu</p>
              </div>
              <div className="how--card d-flex f-center f-col">
                <figure>
                  <img
                    src="https://i.ya-webdesign.com/images/restaurant-icon-png-6.png"
                    alt=""
                  />
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
