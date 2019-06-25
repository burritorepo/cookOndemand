import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Service.scss';

export class Service extends Component {
  render() {
    return (
      <Fragment>
        <div className='service--section d-flex f-center'>
          <figure className='service--section-overlay'>
            <img
              src='https://images.pexels.com/photos/984537/pexels-photo-984537.jpeg?cs=srgb&dl=baguette-baked-bread-984537.jpg&fm=jpg'
              alt=''
            />
          </figure>
          <div className='service--section-content d-flex f-col'>
            <div className='service--content-header'>
              <h2>Servicios</h2>
              <p>Descubre toda nuestra gama de servicios.</p>
            </div>
            <div className='service--card-wrapper'>
              <div className='service--card home d-flex f-center'>
                <figure>
                  <img
                    src='https://images.pexels.com/photos/1327215/pexels-photo-1327215.jpeg?cs=srgb&dl=chef-cook-cooked-1327215.jpg&fm=jpg'
                    alt=''
                  />
                </figure>
                <div className='card-content'>
                  <h2>Chef a domicilio</h2>
                  <p>Un restaurante en casa</p>
                  <Link to='#' className='card-content__link'>
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className='service--card vacation d-flex f-center'>
                <figure>
                  <img
                    src='https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?cs=srgb&dl=chef-dinner-drink-1655329.jpg&fm=jpg'
                    alt=''
                  />
                </figure>
                <div className='card-content'>
                  <h2>Chef para vacaciones</h2>
                  <p>Olvidate de cocinar</p>
                  <Link to='#' className='card-content__link'>
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className='service--card permanent d-flex f-center'>
                <figure>
                  <img
                    src='https://images.pexels.com/photos/1418355/pexels-photo-1418355.jpeg?cs=srgb&dl=adult-casual-chef-1418355.jpg&fm=jpg'
                    alt=''
                  />
                </figure>
                <div className='card-content'>
                  <h2>Chef permanente</h2>
                  <p>Encuentra el perfil que buscas</p>
                  <Link to='#' className='card-content__link'>
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className='service--card show d-flex f-center'>
                <figure>
                  <img
                    src='https://images.pexels.com/photos/1422384/pexels-photo-1422384.jpeg?cs=srgb&dl=asian-food-ceramic-plate-chef-1422384.jpg&fm=jpg'
                    alt=''
                  />
                </figure>
                <div className='card-content'>
                  <h2>Show Cooking</h2>
                  <p>Gastronomia en vivo</p>
                  <Link to='#' className='card-content__link'>
                    Me interesa
                  </Link>
                </div>
              </div>
              <div className='service--card campaign d-flex f-center'>
                <figure>
                  <img
                    src='https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg?cs=srgb&dl=blur-chef-close-up-671956.jpg&fm=jpg'
                    alt=''
                  />
                </figure>
                <div className='card-content'>
                  <h2>Campañas de Marketing</h2>
                  <p>Regala un Chef</p>
                  <Link to='#' className='card-content__link'>
                    Me interesa
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Service;
