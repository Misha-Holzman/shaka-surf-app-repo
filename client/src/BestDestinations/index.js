import React, { Component } from "react";
import Axios from "axios";
import Navbar from "../Navbar";
import "./style.css";

class BestDestinations extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     expLevel: []
  //   };
  // }

  // componentDidMount() {
  //   // let userLocation = this.props.userLocation;
  //   // const api_end = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=da73903d55134e9d8e3202538180511&format=JSON&q=${userLocation}`;

  //   // console.log(this.props);
  //   const api_end = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=da73903d55134e9d8e3202538180511&format=JSON&q=40.712776,-74.005974`;
  //   const self = this;
  //   Axios.get(api_end)
  //     .then(response => {
  //       console.log(response);

  //       let locationData = response.data.data.request[0];
  //       let weatherData = response.data.data.weather[0];

  //       console.log(locationData);
  //       console.log(weatherData);

  //       const info = {
  //         location: locationData.query,
  //         date: weatherData.date,
  //         sunrise: weatherData.astronomy[0].sunrise,
  //         maxTempF: weatherData.maxtempF,
  //         minTempF: weatherData.mintempF,
  //         time: weatherData.hourly[2].time,
  //         waveHeight: weatherData.hourly[2].sigHeight_m,
  //         windSpeed: weatherData.hourly[2].windspeedMiles,
  //         windDirection: weatherData.hourly[2].winddir16Point,
  //         weatherIconUrl: weatherData.hourly[2].weatherIconUrl[0].value,
  //         weatherDescription: weatherData.hourly[2].weatherDesc[0].value,
  //         swellHeight_ft: weatherData.hourly[2].swellHeight_ft,
  //         swellPeriod_secs: weatherData.hourly[2].swellPeriod_secs,
  //         swellDirection: weatherData.hourly[2].swellDir16Point,
  //         waterTemp: weatherData.hourly[2].waterTemp_F
  //       };
  //       self.setState({
  //         info: info
  //       });
  //       console.log(info);
  //     })
  //     .catch(error => {
  //       console.log("error fetching data");
  //     });
  // }

  render() {
    // const { info } = this.state;
    return (
      <div className="container-3">
        <div className="spot-suggest-container">
          {/*
          <p>{info.date}</p>
          <p>
            <strong>Weather</strong>: {info.weatherDescription}
          </p>
          <p>
            <strong>Report taken </strong>: {info.time} am
          </p>
          <p>
            <strong>Sunrise</strong>: {info.sunrise}
          </p>
          <p>
            <strong>Water Temperature</strong>: {info.waterTemp} f
          </p>
          <p>
            <strong>Wave Height</strong>: {info.waveHeight} ft
          </p>
          <p>
            <strong>Wind Speed</strong>: {info.windSpeed} mph
          </p>
          <p>
            <strong>Swell Height</strong>: {info.swellHeight_ft} ft
          </p>
          <p>
            <strong>Swell Period</strong>: {info.swellPeriod_secs} seconds
          </p>
          <p>
            <strong>swell Direction</strong>: {info.swellDirection}
          </p>
        </div>
        <a href="#about">
          <img className="arrow" src="https://i.imgur.com/pSTTXkS.png" alt="" />
        </a>*/}
      </div>
      </div>
    );
  }
}

export default BestDestinations;
