import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Forcasts extends Component {
  render () {
    return (
      <div className='container-4'>
        <div id='slider'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
            data-interval='0'
            keyboard='true'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  className='d-block'
                  src='https://i.imgur.com/JVK73Lp.jpg'
                  alt='First slide'
                  style={{ width: '70%', height: '20%' }}
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='https://i.imgur.com/gy9Bld1.jpg'
                  alt='Second slide'
                  style={{ width: '100%', maxHeight: '695px' }}
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='https://i.imgur.com/wQGJ4Ao.jpg'
                  alt='Third slide'
                  style={{ width: '100%', maxHeight: '695px' }}
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='https://i.imgur.com/K2fsAhu.jpg'
                  alt='Third slide'
                  style={{ width: '100%', maxHeight: '695px' }}
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='https://i.imgur.com/lByQyCV.jpg'
                  alt='Third slide'
                  style={{ width: '100%', maxHeight: '695px' }}
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='https://i.imgur.com/TQff2Fk.jpg'
                  alt='Third slide'
                  style={{ width: '100%', maxHeight: '695px' }}
                />
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Forcasts

// <div className="spot-suggest-container">
//   <h1 className="quote">We're all equal before a wave</h1>
//   <p className="quote-author">Laird Hamilton</p>
// </div>
