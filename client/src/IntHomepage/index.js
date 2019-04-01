import React, { Component } from 'react';
import Axios from 'axios';
import './style.css';

class IntHomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: []
    }
  }

  componentDidMount () {
    // let userLocation = this.props.userLocation;
    // const api_end = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=da73903d55134e9d8e3202538180511&format=JSON&q=${userLocation}`;

    // console.log(this.props);
    const api_end = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=da73903d55134e9d8e3202538180511&format=JSON&q=40.712776,-74.005974`
    const self = this
    Axios.get(api_end)
      .then(response => {
        console.log(response)

        let locationData = response.data.data.request[0]
        let weatherData = response.data.data.weather[0]

        console.log(locationData)
        console.log(weatherData)


        const info = {
          location: locationData.query,
          date: weatherData.date,
          sunrise: weatherData.astronomy[0].sunrise,
          maxTempF: weatherData.maxtempF,
          minTempF: weatherData.mintempF,
          time: weatherData.hourly[2].time,
          waveHeight: weatherData.hourly[2].sigHeight_m,
          windSpeed: weatherData.hourly[2].windspeedMiles,
          windDirection: weatherData.hourly[2].winddir16Point,
          weatherIconUrl: weatherData.hourly[2].weatherIconUrl[0].value,
          weatherDescription: weatherData.hourly[2].weatherDesc[0].value,
          swellHeight_ft: weatherData.hourly[2].swellHeight_ft,
          swellPeriod_secs: weatherData.hourly[2].swellPeriod_secs,
          swellDirection: weatherData.hourly[2].swellDir16Point,
          waterTemp: weatherData.hourly[2].waterTemp_F
        }
        self.setState({
          info: info
        })
        console.log(info)
      })
      .catch(error => {
        console.log('error fetching data')
      })
  }

  render () {
    const { info } = this.state
    return (
      <div className='container-2'>
        {/*
      <div className="beg-homepage-container">
      <img src={info.weatherIconUrl} className="weather-img" />
        <p>
          <strong>Date</strong>
          : {info.date}
        </p>
        <p>
          <strong>time </strong>
          : {info.time} am
        </p>
        <p>
          <strong>sunrise</strong>
          : {info.sunrise}
        </p>
        <p>
          <strong>maxTempF</strong>
          : {info.maxTempF}
        </p>
        <p>
          <strong>minTempF</strong>
          : {info.minTempF}
        </p>
        <p>
          <strong>waveHeight</strong>
          : {info.waveHeight}
        </p>
        <p>
          <strong>windSpeed</strong>
          : {info.windSpeed}
        </p>
        <p>
          <strong>windDirection</strong>
          : {info.windDirection}
        </p>
        <p>
          <strong>weatherDescription</strong>
          : {info.weatherDescription}
        </p>
        <p>
          <strong>swellHeight_ft</strong>
          : {info.swellHeight_ft}
        </p>
        <p>
          <strong>swellPeriod_secs</strong>
          : {info.swellPeriod_secs}
        </p>
        <p>
          <strong>swellDirection</strong>
          : {info.swellDirection}
        </p>
        <p>
          <strong>waterTemp</strong>
          : {info.waterTemp}
        </p>

      </div>
      */}
      </div>
    )
  }
}

export default IntHomePage
