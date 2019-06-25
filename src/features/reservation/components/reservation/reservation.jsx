import React, { Component } from "react";
import { Steps, Button } from "antd";
import EventForm from "./eventForm";
import Start from "./start";
import KitchenForm from "./kitchenForm";
import DetailsForm from "./detailsForm";
import { Confirmation } from "./confirmation";

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
    })
  };

  render() {
    const { current } = this.state;

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
          <Confirmation next={this.next} prev={this.prev} {...this.state} />
        )
      },
      {
        title: "Éxito",
        content: "Last-content"
      }
    ];

    const stepsStyles = {
      marginTop: "16px",
      minHeight: "400px",
      textAlign: "center",
      paddingTop: "80px",
      width: "60%",
      margin: "auto"
    };

    const divStyle = {
      width: "95%",
      margin: "auto"
    };

    console.log("this.state", this.state);
    console.log("this.state", this.state.oven);
    console.log("this.state", this.state.dateTime);

    return (
      <div style={divStyle}>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div style={stepsStyles} className="steps-content">
          {steps[current].content}
        </div>
        {/* <div style={stepsAction} className="steps-action">
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Proceso completo!")}
            >
              Done
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => this.next(steps[current].content)}
            >
              Next
            </Button>
          )}
        </div> */}
        {current === 0 && (
          <Button
            type="primary"
            onClick={() => this.next(steps[current].content)}
          >
            Next
          </Button>
        )}
      </div>
    );
  }
}

export { Reservation };
