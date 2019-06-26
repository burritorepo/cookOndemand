import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Index.scss";

export class Index extends Component {
  handleClick = id => {
    this.props.handleStepIndex(id);
  };

  render() {
    console.log("step", this.props.step);

    return (
      <Fragment>
        <div className="index">
          <nav className="index-nav d-flex f-justify">
            <Link
              to="#"
              onClick={() => this.handleClick("1")}
              className="index-nav__link"
            >
              01. Inicio
            </Link>
            <Link
              to="#"
              onClick={() => this.handleClick("2")}
              className="index-nav__link"
            >
              02. ¿Como Funciona?
            </Link>
            <Link
              to="#"
              onClick={() => this.handleClick("3")}
              className="index-nav__link"
            >
              03. Nuestros Chefs!
            </Link>
            <Link
              to="#"
              onClick={() => this.handleClick("4")}
              className="index-nav__link"
            >
              04. Servicios
            </Link>
          </nav>
        </div>
      </Fragment>
    );
  }
}

export default Index;
