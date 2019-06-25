import React, { Component, Fragment } from 'react';
import './Chef.scss';

export class Chef extends Component {
  render() {
    return (
      <Fragment>
        <div className='chef--section d-flex f-center'>
          <figure className='chef--section-overlay'>
            <img
              src='https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?cs=srgb&dl=asian-food-black-background-bowl-1907227.jpg&fm=jpg'
              alt=''
            />
          </figure>
          <div className='chef--section-content d-flex'>
            <div className='chef--section-content__title'>
              <h2>Nuestros Chefs</h2>
            </div>
            <div className='chef--section-content__text d-flex f-col'>
              <figure>
                <img
                  src='https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?cs=srgb&dl=chef-delicious-food-2494654.jpg&fm=jpg'
                  alt=''
                />
              </figure>
              <p>
                Disfruta de una experiencia gastronomica inolvidable en la
                comodidad de tu casa con un chef a tu servicio.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Chef;
