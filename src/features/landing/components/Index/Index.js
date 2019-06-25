import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Index.scss";

export class Index extends Component {
  render() {
    console.log("step", this.props.step);
    return (
      <Fragment>
        <div className="index">
          <nav className="index-nav d-flex f-justify">
            <Link to="#one" className="index-nav__link">
              01. Inicio
            </Link>
            <Link to="#" className="index-nav__link">
              02. ¿Como Funciona?
            </Link>
            <Link to="#" className="index-nav__link">
              03. Nuestros Chefs!
            </Link>
            <Link to="#" className="index-nav__link">
              04. Servicios
            </Link>
          </nav>
        </div>
      </Fragment>
    );
  }
}

export default Index;
