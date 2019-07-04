import React, { Component, Fragment } from "react";
import Hero from "./HeroSection/Hero";
import How from "./HowSection/How";
import Chef from "./ChefSection/Chef";
import Service from "./ServiceSection/Service";

export class LandingMain extends Component {
  state = {
    wheelEnabled: true
  };

  moveUp = () => {
    const { wheelEnabled } = this.state;
    if (wheelEnabled) {
      this.props.prevStep();
      this.setState({ wheelEnabled: false });
      setTimeout(() => this.setState({ wheelEnabled: true }), 1000);
    }
  };

  moveDown = () => {
    const { wheelEnabled } = this.state;
    if (wheelEnabled) {
      this.props.nextStep();
      this.setState({ wheelEnabled: false });
      setTimeout(() => this.setState({ wheelEnabled: true }), 1000);
    }
  };

  componentDidMount() {
    document.addEventListener("wheel", e => {
      if (e.deltaY < 0) {
        this.moveUp();
      } else if (e.deltaY > 0) {
        this.moveDown();
      }
    });
  }

  /* componentWillUnmount(e) {
    window.removeEventListener('wheel', e);
  } */

  render() {
    console.log(this.props.step);

    return (
      <Fragment>
        <Hero step={this.props.step} />
        <How step={this.props.step} />
        <Chef step={this.props.step} />
        <Service step={this.props.step} />
      </Fragment>
    );

    /* const { step } = this.props;

    switch (step) {
      case 1:
        return <Hero />;

      case 2:
        return <How />;

      case 3:
        return <Chef />;

      case 4:
        return <Service />;
    } */
  }
}

export default LandingMain;
