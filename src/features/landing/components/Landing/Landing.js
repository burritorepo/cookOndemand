import React, { Component, Fragment } from "react";
import LandingMain from "../LandingMain/LandingMain";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "../Index/Index";
import Navigation from "../Navigation/Navigation";
import "./landing.scss";

export class Landing extends Component {
  state = {
    step: 4
  };

  nextStep = () => {
    const { step } = this.state;
    if (step + 1 < 5) {
      this.setState({ step: step + 1 });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    if (step - 1 > 0) {
      this.setState({ step: step - 1 });
    }
  };

  render() {
    const { step } = this.state;

    return (
      <Fragment>
        <Header />
        <LandingMain
          step={step}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
        <Index step={step} />
        <Navigation nextStep={this.nextStep} prevStep={this.prevStep} />
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default Landing;
