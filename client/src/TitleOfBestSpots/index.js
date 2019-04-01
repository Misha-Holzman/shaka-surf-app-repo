import React, { Component } from 'react';
import './style.css';

class TitleOfBestSpots extends Component {
  render () {
    return (
      <div className='spot-suggest-title'>
        <div id='bestSpots' />
        <h1 className='best-spot-title'>SOME OF THE BEST SURF SPOTS IN THE WORLD</h1>
        <div id='press'>
          <div className='press-container hover11'>
            <div className='img-container'>
              <a
                href='https://www.youtube.com/watch?v=fzyh70biJ7c'
                target='_blank'
              >
                <img src='https://i.imgur.com/Iwyr9Ue.jpg' alt='' className='img' />
              </a>
            </div>
            <div className='img-container'>
              <a
                href='https://grapevine.is/mag/feature/2017/04/21/making-waves-braving-the-sea-with-icelands-crazy-surf-gang/'
                target='_blank'
              >
                <img src='https://i.imgur.com/4LPe3ZJ.jpg' alt='' className='img' />
              </a>
            </div>
            <div className='img-container'>
              <a
                href='https://www.surfer.com/features/mauritania-surf-exploration-2-08/'
                target='_blank'
              >
                <img src='https://i.imgur.com/GwiTnjI.jpg' alt='' className='img' />
              </a>
            </div>
            <div className='img-container'>
              <a
                href='https://www.surfertoday.com/surfing/7056-the-best-hawaiian-surf-spots'
                target='_blank'
              >
                <img src='https://i.imgur.com/RBEqS6M.jpg' alt='' className='img' />
              </a>
            </div>
            <div className='img-container'>
              <a
                href='https://www.surfingaustralia.com/'
                target='_blank'
              >
                <img src='https://i.imgur.com/Z4Mi2SK.jpg' alt='' className='img' />
              </a>
            </div>
            <div className='img-container'>
              <a
                href='https://lushpalm.com/surfing-nicaragua/'
                target='_blank'
              >
                <img src='https://i.imgur.com/CSeFS8s.jpg' alt='' className='img' />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TitleOfBestSpots
