import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Breadcrumb, Card, Row, Col, Icon, Button } from 'antd';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// function WrapCard(props) {
//   // address: "recavarren 111 miraflores"
//   // burners: "2"
//   // client_id: null
//   // current: 5
//   // dateTime: "2019-07-12"
//   // email: "jaim@delmar.com"
//   // energy: "gas"
//   // id: "AUfU5b4MRdxM0rCIPYpY"
//   // name: "jaim "
//   // obs: "cena romantica"
//   // oven: "si"
//   // password: "234566"
//   // pax: "2"
//   // phone: "1234567899"
//   // preferences: "criolla"
//   // restrictions: "Intolerancia a la lactosa"
//   // role: "client"
//   console.log('props', props)
//   return (
//     <Card className="card request__card mb-20" title={`Solicitud ${props.datetime}`}>
//       <Row gutter={16}>
//         <Col span={12}>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">
//               {props.pax}
//             </span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">{props.obs}</span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">{props.address}</span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">S/ 160.00 - S/ 180.00 / persona</span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">{props.preferences}</span>
//           </div>
//         </Col>
//         <Col span={12}>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">Cocina a Gas</span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">4 Hornillas / Sin Horno</span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">Fecha: {props.datetime} </span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">{props.restrictions}</span>
//           </div>
//           <div className="request__item mb-5">
//             <Icon type="check" className="c-primary" />
//             <span className="fsize-12">De preferencia llegar media hora antes </span>
//           </div>
//         </Col>
//       </Row>
//       <div className="card__footer d-flex jc-space-between ai-center">
//         <Icon type="delete" />
//         <Button type="primary">
//           <NavLink to="/cheff/request/1">Enviar propuesta</NavLink>
//         </Button>
//       </div>
//     </Card>
//   )
// }

function CardDynamic(props) {
  const {
    data,
    handleDelete
  } = props;

  return (
    <Card className="card request__card mb-20" title={`Solicitud de ${data.dateTime}`}>
      <Row gutter={16}>
        <Col span={12}>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Numero de invitados</label>
            <div>
              <span className="fsize-12">{data.pax}</span>
            </div>
          </div>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Categoria de cocina</label>
            <div>
              <span className="fsize-12">{data.preferences}</span>
            </div>
          </div>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Tipo de cocina</label>
            <div>
              <span className="fsize-12">{data.energy}</span>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Fecha</label>
            <div>
              <span className="fsize-12">{data.dateTime}</span>
            </div>
          </div>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Direccion</label>
            <div>
              <span className="fsize-12">{data.address}</span>
            </div>
          </div>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Tiene horno</label>
            <div>
              <span className="fsize-12">{data.oven}</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Alergias</label>
            <div>
              <span className="fsize-12">{data.restrictions}</span>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Comentarios</label>
            <div>
              <span className="fsize-12">{data.obs}</span>
            </div>
          </div>
        </Col>
      </Row>
      <div className="card__footer d-flex jc-space-between ai-center">
        <Icon type="delete" onClick={handleDelete} />
        <Button type="primary">
          <NavLink to={`/cheff/request/${data.id}`}>Enviar propuesta</NavLink>
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
    return (
      <div className="view view-request">
        {/* <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Solicitudes</Breadcrumb.Item>
        </Breadcrumb>
        <br /> */}
        <h1 className="title c-white view-title">Mis Solicitudes</h1>
        <br />
        {
          reservations.map((reservation, id) => {
            return <CardDynamic data={reservation} key={id} />
          })
        }
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
