import React, { Component, Fragment } from "react";
import Hero from "./HeroSection/Hero";
import How from "./HowSection/How";
import Chef from "./ChefSection/Chef";
import Service from "./ServiceSection/Service";

export class LandingMain extends Component {
  componentDidMount() {
    document.addEventListener("wheel", e => {
      if (e.deltaY < 0) {
        this.props.prevStep();
      } else if (e.deltaY > 0) {
        this.props.nextStep();
      }
    });
  }

  render() {
    const { step } = this.props;

    switch (step) {
      case 1:
        return <Hero />;

      case 2:
        return <How />;

      case 3:
        return <Chef />;

      case 4:
        return <Service />;
    }
  }
}

export default LandingMain;
