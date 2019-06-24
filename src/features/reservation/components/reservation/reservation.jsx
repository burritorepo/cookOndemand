import React, { Component } from "react";
import { Steps, Button, message } from "antd";
import EventForm from "./eventForm";
import Start from "./start";
// import KitchenForm from '../kitchen/kitchenForm.reserva';
// import DetailsForm from '../details/detailsForm.reserva';

class Reservation extends Component {
  // componentDidMount() {}
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
      date: "",
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

  handleSelectChange = (value, id) => {
    console.log("selected", value);
    console.log("selectfield", id);
    // console.log('name', name)
    // this.setState({
    //   [value]: e.target.value
    // })
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
      date,
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
      date,
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
            values={values}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
          />
        )
      },
      // {
      //   title: 'Cocina',
      //   content: <KitchenForm
      //     values={values}
      //     handleChange={this.handleChange}
      //   />,
      // },
      // {
      //   title: 'Detalles',
      //   content: <DetailsForm
      //     values={values}
      //     handleChange={this.handleChange}
      //   />,
      // },
      {
        title: "Confirmación",
        content: "Last-content"
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

    const stepsAction = {
      marginTop: "24px"
    };

    const divStyle = {
      width: "95%",
      margin: "auto"
    };
    console.log("state", this.state.address);
    console.log("state", this.state.pax);

    return (
      <div style={divStyle}>
        {" "}
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div style={stepsStyles} className="steps-content">
          {steps[current].content}
        </div>
        <div style={stepsAction} className="steps-action">
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
        </div>
      </div>
    );
  }
}

export { Reservation };
