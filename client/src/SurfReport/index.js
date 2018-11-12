import React from "react";
import "./style.css";




export default function({ surfInfo, locationName }) {
    // const zipcode = this.props.zipcode;
    return (
      <div className="beg-homepage-container">
        <p className="data-container">
          <span id="data-size">{locationName}</span>
        </p>
            <p className="data-container">
              <strong>WEATHER – </strong>  <span id="data-size">{surfInfo.weatherDescription}</span>
            </p>
            <p className="data-container">
              <strong>REPORT – </strong>  <span id="data-size">{surfInfo.time} am</span>
            </p>
            <p className="data-container">
              <strong>WATER TEMP – </strong>  <span id="data-size">{surfInfo.waterTemp} f</span>
            </p>
            <p className="data-container">
              <strong>WAVE HEIGHT – </strong><span id="data-size"> {surfInfo.waveHeight} ft</span>
            </p>
            <p className="data-container">
              <strong>WIND SPEED – </strong>  <span id="data-size">{surfInfo.windSpeed} mph</span>
            </p>
            <p className="data-container" id="swell-height">
              <strong>SWELL HEIGHT – </strong>  <span id="data-size">{surfInfo.swellHeight_ft} ft</span>
            </p>
            <p className="data-container">
              <strong>SWELL PERIOD – </strong>  <span id="data-size">{surfInfo.swellPeriod_secs} seconds</span>
            </p>
            <p className="data-container">
              <strong>SWELL DIRECTION – </strong>  <span id="data-size">{surfInfo.swellDirection}</span>
            </p>
          </div>
    );
  }


