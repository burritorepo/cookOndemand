import React, { Component } from "react";
import { Steps, Button } from "antd";
import EventForm from "./eventForm";
import Start from "./start";
import KitchenForm from "./kitchenForm";
import DetailsForm from "./detailsForm";
import { Confirmation } from "./confirmation";
import { Success } from "./success";

import "./reservation.scss";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      address: "",
      pax: "",
      preferences: "",
      energy: "",
      burners: "",
      oven: "",
      dateTime: "",
      restrictions: "",
      obs: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;
    const { name, email, password, phoneNumber, role } = this.state;

    /* Create Reservation */

    /* Register with firebase */
    firebase
      .createUser({ email, password }, { name, email, phoneNumber, role })
      .catch(err => alert("That user already exists", "error"));
  };

  next = () => {
    const { current } = this.state;
    this.setState({
      current: current + 1
    });
  };

  prev = () => {
    const { current } = this.state;
    this.setState({
      current: current - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleSelectChange = (label, value) => {
    this.setState({
      [label]: value
    });
  };

  handleRatio = (label, value) => {
    console.log("ratio", value.target.value);
    this.setState({
      [label]: value.target.value
    });
  };

  handleDate = (label, date, value) => {
    console.log("date", value);
    this.setState({
      [label]: value
    });
  };

  render() {
    const { current } = this.state;

    const {
      address,
      pax,
      preferences,
      energy,
      burners,
      oven,
      dateTime,
      restrictions,
      obs
    } = this.state;

    const values = {
      address,
      pax,
      preferences,
      energy,
      burners,
      oven,
      dateTime,
      restrictions,
      obs
    };

    const { Step } = Steps;

    const steps = [
      {
        title: "Inicio",
        content: <Start />
      },
      {
        title: "Evento",
        content: (
          <EventForm
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            next={this.next}
            prev={this.prev}
          />
        )
      },
      {
        title: "Cocina",
        content: (
          <KitchenForm
            handleSelectChange={this.handleSelectChange}
            handleRatio={this.handleRatio}
            next={this.next}
            prev={this.prev}
          />
        )
      },
      {
        title: "Detalles",
        content: (
          <DetailsForm
            handleChange={this.handleChange}
            handleDate={this.handleDate}
            next={this.next}
            prev={this.prev}
          />
        )
      },
      {
        title: "Confirmación",
        content: (
          <Confirmation
            onSubmit={this.handleSubmit}
            next={this.next}
            prev={this.prev}
            {...this.state}
            values={values}
          />
        )
      },
      {
        title: "Éxito",
        content: <Success />
      }
    ];

    const stepsStyles = {
      color: "white",
      marginTop: "16px",
      minHeight: "400px",
      textAlign: "center",
      paddingTop: "80px",
      width: "60%",
      margin: "auto"
    };

    const divStyle = {
      width: "95%",
      margin: "auto",
      paddingTop: "20px",
      color: "white"
    };

    const backGround = {
      height: "100vh",
      backgroundImage:
        "url('http://www.fondosni.com/images/2013-06-09/cucharas%20con%20diferentes%20alimentos-710592.jpg')",
      backgroundRepeat: "noRepeat",
      backgroundSize: "cover"
    };

    return (
      <div className="view view-request" style={backGround}>
        <div
          className="opacity"
          style={{ height: "100vh", backgroundColor: "rgba(0,0,0,.5)" }}
        >
          <div className="container reservation" style={divStyle}>
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div style={stepsStyles} className="steps-content">
              {steps[current].content}
            </div>
            {current === 0 && (
              <Button
                type="primary"
                onClick={() => this.next(steps[current].content)}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export { Reservation };
