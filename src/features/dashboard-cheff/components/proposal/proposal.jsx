import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import { ProposalInputs } from "./proposalInputs";
import { Confirmation } from "./confirmation";
import { Success } from './success';

class Proposal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      starter: "",
      starter_desc: "",
      entry: "",
      entry_desc: "",
      main: "",
      main_desc: "",
      dessert: "",
      dessert_desc: ""
    };
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  next = () => {
    const step = this.state.step;
    this.setState({
      step: step + 1
    });
  };

  prev = () => {
    const step = this.state.step;
    this.setState({
      step: step - 1
    });
  };

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const { step } = this.state;
    const {
      starter,
      starter_desc,
      entry,
      entry_desc,
      main,
      main_desc,
      dessert,
      dessert_desc
    } = this.state;

    const values = {
      starter,
      starter_desc,
      entry,
      entry_desc,
      main,
      main_desc,
      dessert,
      dessert_desc
    };

    console.log("state", this.state);

    switch (step) {
      case 1:
        return (
          <div className="view view-request-detail">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <NavLink to="/cheff">Home</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/cheff/request">Solicitudes</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Propuesta</Breadcrumb.Item>
            </Breadcrumb>
            <br />
            <h1 className="title c-primary">Solicitud de {id}</h1>
            <br />
            <div className="content">
              <h2>Solicitud 22/06/19</h2>
              <hr />
              <br />
              <ProposalInputs
                next={this.next}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="view view-request-detail">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <NavLink to="/cheff">Home</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/cheff/request">Solicitudes</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Propuesta</Breadcrumb.Item>
            </Breadcrumb>
            <br />
            <h1 className="title c-primary">Solicitud de {id}</h1>
            <br />
            <div className="content">
              <h2>Solicitud 22/06/19</h2>
              <hr />
              <Confirmation
                next={this.next}
                prev={this.prev}
                values={values}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="view view-request-detail">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <NavLink to="/cheff">Home</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/cheff/request">Solicitudes</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Propuesta</Breadcrumb.Item>
            </Breadcrumb>
            <br />
            <h1 className="title c-primary">Solicitud de {id}</h1>
            <br />
            <div className="content">
              <h2>Solicitud 22/06/19</h2>
              <hr />
              <br />
              <Success
              />
            </div>
          </div>
        );
    }
  }
}

export { Proposal };
