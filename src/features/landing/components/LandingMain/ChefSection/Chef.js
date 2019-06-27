import React, { Component, Fragment } from "react";
import { TimelineLite } from "gsap";
import "./Chef.scss";
import chefBanner from "./img/chef-banner.jpg";
import chefProfile from "./img/chef-profile.jpg";

export class Chef extends Component {
  constructor(props) {
    super(props);
    this.js_chef = React.createRef();
  }

  componentDidMount() {
    const tl = new TimelineLite();

    tl.to(this.js_chef.current, 2.5, { opacity: 1, delay: 0.5 });
  }

  render() {
    return (
      <Fragment>
        <div
          className="chef--section d-flex f-center js_chef"
          ref={this.js_chef}
        >
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
