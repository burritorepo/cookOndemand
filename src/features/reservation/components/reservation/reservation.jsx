import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

import { Steps, Button } from "antd";
import EventForm from "./eventForm";
import Start from "./start";
import KitchenForm from "./kitchenForm";
import DetailsForm from "./detailsForm";
import PersonalInfo from "./personalInfo";
import { Confirmation } from "./confirmation";
import { Success } from "./success";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      client_id: null,
      address: "",
      pax: "",
      preferences: "",
      energy: "",
      burners: "",
      oven: "",
      dateTime: "",
      restrictions: "",
      obs: "",
      name: "",
      password: "",
      email: "",
      phone: "",
      role: "client"
    };
  }

  static propTypes = {
    firebase: PropTypes.object.isRequired,
    firestore: PropTypes.object.isRequired
  };

  onSubmit = () => {
    const { firebase, firestore, history } = this.props;
    const { name, email, password, phone, role } = this.state;

    /* Create Reservation */

    /* Register with firebase */
    firebase
      .createUser({ email, password }, { name, email, phone, role })
      .then(userData => {
        console.log('userData', userData)
        const userId = this.props.user;
        this.setState({ client_id: userId });

        firestore
          .add({ collection: "reservations" }, this.state)
          .then(() => history.push("/user"));
      })
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
    this.setState({
      [label]: value.target.value
    });
  };

  handleDate = (label, date, value) => {
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
            next={this.next}
            prev={this.prev}
            {...this.state}
            values={values}
          />
        )
      },
      {
        title: "Datos Personales",
        content: (
          <PersonalInfo
            handleChange={this.handleChange}
            next={this.next}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
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
      width: "40%",
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
            <div style={{ textAlign: "center" }} className="button">
              {current === 0 && (
                <Button
                  type="primary"
                  onClick={() => this.next(steps[current].content)}
                >
                  Empecemos
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.firebase.auth.uid
});

export default compose(
  firebaseConnect(),
  firestoreConnect(),
  connect(mapStateToProps)
)(Reservation);
