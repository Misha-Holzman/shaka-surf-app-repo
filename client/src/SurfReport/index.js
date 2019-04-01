import React from 'react'
import './style.css'

export default function ({ surfInfo, locationName }) {
  // const zipcode = this.props.zipcode;
  // const locationFound = { locationName } !== null ? true : false)
  // const locationFound = (document.getElementById('location1').innerHTML === '') ? true : false;
  return (
    <div className='main-homepage-data-container'>
      <div className='location-container' >
        {/* { { locationFound }
          ? 
          <p className='data-container' id='location'>
            <span id='data-size'>{locationName}</span>
          </p>
          :
          <p></p>
        } */}
        <p className='data-container'>
            <span id='location1'>{locationName}</span>
        </p>
      </div>
      <div className='beg-homepage-container'>
        <p className='data-container'>
          <strong>WEATHER – </strong>  <span id='data-size'>{surfInfo.weatherDescription}</span>
        </p>
        <p className='data-container'>
          <strong>REPORT – </strong>  <span id='data-size'>{surfInfo.time} am</span>
        </p>
        <p className='data-container'>
          <strong>WATER TEMP – </strong>  <span id='data-size'>{surfInfo.waterTemp} f</span>
        </p>
        <p className='data-container'>
          <strong>WAVE HEIGHT – </strong><span id='data-size'> {surfInfo.waveHeight} ft</span>
        </p>
        <p className='data-container'>
          <strong>WIND SPEED – </strong>  <span id='data-size'>{surfInfo.windSpeed} mph</span>
        </p>
        <p className='data-container' id='swell-height'>
          <strong>SWELL HEIGHT – </strong>  <span id='data-size'>{surfInfo.swellHeight_ft} ft</span>
        </p>
        <p className='data-container' id='swell-period'>
          <strong>SWELL PERIOD – </strong>  <span id='data-size'>{surfInfo.swellPeriod_secs} seconds</span>
        </p>
        <p className='data-container' id='swell-direction'>
          <strong>SWELL DIRECTION – </strong>  <span id='data-size'>{surfInfo.swellDirection}</span>
        </p>
      </div>

    </div>
  )
}
