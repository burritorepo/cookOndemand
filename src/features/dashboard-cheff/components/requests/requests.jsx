import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Breadcrumb, Card, Row, Col, Icon, Button } from 'antd';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function WrapCard(props) {
  // address: "recavarren 111 miraflores"
  // burners: "2"
  // client_id: null
  // current: 5
  // dateTime: "2019-07-12"
  // email: "jaim@delmar.com"
  // energy: "gas"
  // id: "AUfU5b4MRdxM0rCIPYpY"
  // name: "jaim "
  // obs: "cena romantica"
  // oven: "si"
  // password: "234566"
  // pax: "2"
  // phone: "1234567899"
  // preferences: "criolla"
  // restrictions: "Intolerancia a la lactosa"
  // role: "client"
  console.log('props', props)
  return (
    <Card className="card request__card mb-20" title={`Solicitud ${props.datetime}`}>
      <Row gutter={16}>
        <Col span={12}>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">
              {props.pax}
            </span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">{props.obs}</span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">{props.address}</span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">S/ 160.00 - S/ 180.00 / persona</span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">{props.preferences}</span>
          </div>
        </Col>
        <Col span={12}>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">Cocina a Gas</span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">4 Hornillas / Sin Horno</span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">Fecha: {props.datetime} </span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">{props.restrictions}</span>
          </div>
          <div className="request__item mb-5">
            <Icon type="check" className="c-primary" />
            <span className="fsize-12">De preferencia llegar media hora antes </span>
          </div>
        </Col>
      </Row>
      <div className="card__footer d-flex jc-space-between ai-center">
        <Icon type="delete" />
        <Button type="primary">
          <NavLink to="/cheff/request/1">Enviar propuesta</NavLink>
        </Button>
      </div>
    </Card>
  )
}

class DashboardRequests extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { reservations = [] } = this.props;
    const listCards = reservations.map((reservation, id) => {
      return <WrapCard {...reservation} key={id} />
    });

    return (
      <div className="view view-request">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Solicitudes</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="title c-primary">Mis Solicitudes</h1>
        <br />
        {listCards}
        {/* <Row gutter={16}>
          <Col span={24}>
            
          </Col>
        </Row> */}
        {/* <br />
        <Row gutter={16}>
          <Col span={24}>
            <Card className="card request__card" title="Solicitud 22/06/19">
              <Row gutter={16}>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">13 - 20 personas</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Cena</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Avenida José Pardo 600, Miraflores</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">S/ 160.00 - S/ 180.00 / persona</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Comida Italiana</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Cocina a Gas</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">4 Hornillas / Sin Horno</span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Fecha: 22/06/2019 </span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">Alergico a los Mariscos </span>
                  </div>
                  <div className="request__item mb-5">
                    <Icon type="check" className="c-primary" />
                    <span className="fsize-12">De preferencia llegar media hora antes </span>
                  </div>
                </Col>
              </Row>
              <div className="card__footer d-flex jc-space-between ai-center">
                <Icon type="delete" />
                <Button type="primary">
                  <NavLink to="/cheff/request/2">Enviar propuesta</NavLink>
                </Button>
              </div>
            </Card>
          </Col>
        </Row> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reservations: state.firestore.ordered.reservations
});

export default compose(
  firestoreConnect([{ collection: 'reservations' }]),
  connect(mapStateToProps)
)(DashboardRequests)
