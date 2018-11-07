import React, { Component } from "react";
import Axios from "axios";
import Navbar from "../Navbar";
import "./style.css";

class BegHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      isHidden: false
    };
    this.getSurfReport = this.getSurfReport.bind(this);
  }

  // if location is 5 char string, hit the api to return lat long
  // if location is array, hit the api to return zip

  async convertZip(zip) {
    //const weatherAPIkey = 'u9Ayipu6q9JX9DVPmAAGOZcxu0yDbn795LdVNvgicZZ61FmJpyxFLgHQqf7qU8GB';
    const apiURL = `http://api.zippopotam.us/us/${zip}`;
    try {
      const {
        data: {
          places: [place]
        }
      } = await Axios.get(apiURL);
      return place;
    } catch (e) {
      throw e;
    }
  }

  async getWeather(weatherLocation) {
    const weatherAPIkey = "da73903d55134e9d8e3202538180511";
    const apiURL = `http://api.worldweatheronline.com/premium/v1/marine.ashx?format=JSON&key=${weatherAPIkey}&q=${weatherLocation}`;
    try {
      const {
        data: {
          data: { weather }
        }
      } = await Axios.get(apiURL);
      return weather;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @method getSurfReport
   * @param {string} zip a valid US zipcode
   * @desc uses this.getWeather and this.convertZip to get a surf report
   * @return undefined
   * sets state with surf report data
   */

  // if location is an array, then skip over covert zip
  // make a dummy place so that location works
  async getSurfReport(location) {
    let place = location;

    if (!("latitude" in location)) {
      place = await this.convertZip(location);
    }

    const [weatherData] = await this.getWeather([
      place.latitude,
      place.longitude
    ]);

    const info = {
      location: place,
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
    };

    this.setState({ info });
  }

  componentDidMount() {
    const locationObtained = ({ coords: { latitude, longitude } }) => {
      this.getSurfReport({ latitude, longitude });
      //do_something(position.coords.latitude, position.coords.longitude);
    };

    const locationDenied = err => {
      this.setState({
        isHidden: true
      });
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        locationObtained,
        locationDenied
      );
    } else {
      locationDenied()
      // what happens if we can't get the geolocation?
      // this.getSurfReport(90210);
    }

    return;
  }

  render() {
    const { info } = this.state;
    return (
      <div className="container-1">
        {!this.state.isHidden === true ? (
          <div className="beg-homepage-container">
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
        ) : (
          <p className="enter-loc-prompt">Please Enter Your Location</p>
        )}
        <a href="#about">
          <img className="arrow" src="https://i.imgur.com/pSTTXkS.png" alt="" />
        </a>
      </div>
    );
  }
}

export default BegHomePage;
