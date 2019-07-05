import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Breadcrumb, Card, Row, Col, Icon, Button, Modal } from 'antd';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function CardDynamic(props) {
  const {
    data,
    handleDelete
  } = props;

  console.log('data', data)
  return (
    <Card className="card request__card mb-20" title="Solicitud 22/06/19">
      <Row gutter={16}>
        <Col span={12}>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Numero de invitados</label>
            <div>
              <span className="fsize-12">13 - 20</span>
            </div>
          </div>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Categoria de cocina</label>
            <div>
              <span className="fsize-12">13 - 20</span>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Fecha</label>
            <div>
              <span className="fsize-12">13 - 20</span>
            </div>
          </div>
          <div className="request__item mb-5">
            <label className="c-primary fsize-11">Direccion</label>
            <div>
              <span className="fsize-12">13 - 20</span>
            </div>
          </div>
        </Col>
      </Row>
      <div className="card__footer d-flex jc-space-between ai-center">
        <Icon type="delete" onClick={handleDelete} />
        <Button type="primary">
          <NavLink to="/user/request/1">Ver propuestas</NavLink>
        </Button>
      </div>
    </Card>
  )
}
class DashboardRequests extends Component {

  state = { visible: false }

  handleDelete = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {
      reservations = [],
      id
    } = this.props;

    console.log('props', this.props)
    return (
      <div className="view view-requests">
        {/* <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/user">Inicio</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Solicitudes</Breadcrumb.Item>
        </Breadcrumb>
        <br /> */}
        <h1 className="title c-white">Mis Solicitudes</h1>
        <br />
        {
          reservations.filter((reservation) => reservation.client_id === id)
          .map((reservation) => {
            return <CardDynamic data={reservation} key={id} onDelete={this.handleDelete} onCancel={this.handleCancel} />
          })
          // reservations.map((reservation, id) => {
          //   return <CardDynamic data={reservation} key={id} onDelete={this.handleDelete} onCancel={this.handleCancel} />
          // })
        }
        <Modal
          title="Eliminar solicitud"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Estas seguro que deseas eliminar esta solicitud?</p>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reservations: state.firestore.ordered.reservations,
  id: state.firebase.auth.uid
});

export default compose(
  firestoreConnect([{ collection: 'reservations' }]),
  connect(mapStateToProps)
)(DashboardRequests)
