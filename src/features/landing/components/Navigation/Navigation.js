import React, { Component, Fragment } from "react";
import "./Navigation.scss";

export class Navigation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Fragment>
        <div className="navigation d-flex f-center f-col">
          <button onClick={this.back} className="navigation__button nav-up">
            <i className="fas fa-angle-double-up" />
          </button>
          <span>Scroll</span>
          <button
            onClick={this.continue}
            className="navigation__button nav-down active"
          >
            <i className="fas fa-angle-double-down" />
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Navigation;