import React, { Component, Fragment } from 'react';
import { TimelineLite, Power2 } from 'gsap';
import './How.scss';
import howBanner from './img/how-banner.jpg';
import howIngredient from './img/how-ingredients-1.png';
import howHome from './img/how-home-2.png';
import howMenu from './img/how-menu-3.png';
import howClean from './img/how-clean-4.png';

export class How extends Component {
  constructor(props) {
    super(props);
    this.js_how = React.createRef();
    this.js_card_1 = React.createRef();
    this.js_card_2 = React.createRef();
    this.js_card_3 = React.createRef();
    this.js_card_4 = React.createRef();
  }

  componentDidMount() {
    const tl = new TimelineLite();

    tl.from(this.js_how.current, 2.5, {
      opacity: 0,
      delay: 0.5,
      ease: Power2.easeInOut
    });

    tl.from(
      this.js_card_1.current,
      0.5,
      {
        opacity: 0,
        y: -40,
        ease: Power2.easeOut
      },
      '-=1.5'
    );

    tl.from(
      this.js_card_2.current,
      0.5,
      {
        opacity: 0,
        y: -40,
        ease: Power2.easeOut
      },
      '-=1.4'
    );

    tl.from(
      this.js_card_3.current,
      0.5,
      {
        opacity: 0,
        y: -40,
        ease: Power2.easeOut
      },
      '-=1.3'
    );

    tl.from(
      this.js_card_4.current,
      0.5,
      {
        opacity: 0,
        y: -40,
        ease: Power2.easeOut
      },
      '-=1.2'
    );
  }

  render() {
    return (
      <Fragment>
        <div className='how--section d-flex f-center js_how' ref={this.js_how}>
          <figure className='how--section-overlay'>
            <img src={howBanner} alt='' />
          </figure>
          <div className='how--section-content d-flex f-col'>
            <div className='how--content-title'>
              <h2>
                <span>¿ </span>Como funciona<span> ?</span>
              </h2>
            </div>
            <div className='how--card-wrapper d-flex'>
              <div
                className='how--card d-flex f-center f-col js_card_1'
                ref={this.js_card_1}
              >
                <figure>
                  <img src={howIngredient} alt='' />
                </figure>
                <p>Compramos los ingredientes</p>
              </div>
              <div
                className='how--card d-flex f-center f-col js_card_2'
                ref={this.js_card_2}
              >
                <figure>
                  <img src={howHome} alt='' />
                </figure>
                <p>Cocinamos en tu casa</p>
              </div>
              <div
                className='how--card d-flex f-center f-col js_card_3'
                ref={this.js_card_3}
              >
                <figure>
                  <img src={howMenu} alt='' />
                </figure>
                <p>Servimos el menu</p>
              </div>
              <div
                className='how--card d-flex f-center f-col js_card_4'
                ref={this.js_card_4}
              >
                <figure>
                  <img src={howClean} alt='' />
                </figure>
                <p>¡Y dejamos todo impecable!</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default How;
