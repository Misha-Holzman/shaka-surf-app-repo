import React, { Component } from "react";
import Axios from "axios";
import SearchBar from "../SearchForm";
import Navbar from "../Navbar";
import "./style.css";

class BegHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      isHidden: false,
      userZipcode: ""
    };
    this.getSurfReport = this.getSurfReport.bind(this);
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
  }

  // if location is 5 char string, hit the api to return lat long
  // if location is array, hit the api to return zip

  async handleZipcodeChange(zipcode) {
    this.setState({
      userZipcode: zipcode
    });
  }


  async convertZip(location) {
    let readyZipcode = this.state.userZipcode
    //const weatherAPIkey = 'u9Ayipu6q9JX9DVPmAAGOZcxu0yDbn795LdVNvgicZZ61FmJpyxFLgHQqf7qU8GB';
    const apiURL = `http://api.zippopotam.us/us/${readyZipcode}`;
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
      date:               weatherData.date,
      sunrise:            weatherData.astronomy[0].sunrise,
      maxTempF:           weatherData.maxtempF,
      minTempF:           weatherData.mintempF,
      time:               weatherData.hourly[2].time,
      waveHeight:         weatherData.hourly[2].sigHeight_m,
      windSpeed:          weatherData.hourly[2].windspeedMiles,
      windDirection:      weatherData.hourly[2].winddir16Point,
      weatherIconUrl:     weatherData.hourly[2].weatherIconUrl[0].value,
      weatherDescription: weatherData.hourly[2].weatherDesc[0].value,
      swellHeight_ft:     weatherData.hourly[2].swellHeight_ft,
      swellPeriod_secs:   weatherData.hourly[2].swellPeriod_secs,
      swellDirection:     weatherData.hourly[2].swellDir16Point,
      waterTemp:          weatherData.hourly[2].waterTemp_F
    };

    this.setState({ info });
  }

  componentDidMount() {
    const locationObtained = ({ coords: { latitude, longitude } }) => {
      this.getSurfReport({ latitude, longitude });
      //do_something(position.coords.latitude, position.coords.longitude);
      this.setState({
        isHidden: false
      });
    };

    const locationDenied = err => {
      this.setState({
        isHidden: true
      });
    };

    if ("geolocation" in navigator || this.state.zipInput.length === 5) {
      navigator.geolocation.getCurrentPosition(
        locationObtained,
        locationDenied
      );
      this.convertZip()
    } else {
      locationDenied()
      // what happens if we can't get the geolocation?
      // this.getSurfReport(90210);
    }

    return;
  }

  render() {
    const { info } = this.state;
    const zipcode = this.state.userZipcode;
    return (
      <div className="container-1">
        <div className="enter-loc-prompt">
            <p className="enterZip">Enter Zip Code:</p>
            <SearchBar onZipcodeChange={this.handleZipcodeChange}/>
        </div>
        {
          !this.state.isHidden === true ?
          // || zipcode.length === 5
          (
          <div className="beg-homepage-container">
            <p id="date"><span id="date">{info.date}</span></p>
            <p>
              <strong>WEATHER – </strong>  <span id="data-size" id="data-size">{info.weatherDescription}</span>
            </p>
            <p>
              <strong>REPORT TAKEN – </strong>  <span id="data-size">{info.time} am</span>
            </p>
            <p>
              <strong>SUNRISE – </strong>  <span id="data-size">{info.sunrise}</span>
            </p>
            <p>
              <strong>WATER TEMP – </strong>  <span id="data-size">{info.waterTemp} f</span>
            </p>
            <p>
              <strong>WAVE HEIGHT – </strong><span id="data-size"> {info.waveHeight} ft</span>
            </p>
            <p>
              <strong>WIND SPEED – </strong>  <span id="data-size">{info.windSpeed} mph</span>
            </p>
            <p>
              <strong>SWELL HEIGHT – </strong>  <span id="data-size">{info.swellHeight_ft} ft</span>
            </p>
            <p>
              <strong>SWELL PERIOD – </strong>  <span id="data-size">{info.swellPeriod_secs} seconds</span>
            </p>
            <p>
              <strong>SWELL DIRECTION – </strong>  <span id="data-size">{info.swellDirection}</span>
            </p>
          </div>
        ) : (
          <p>This is temporary</p>
        )}
        <a href="#bestSpots">
          <img className="arrow" src="https://i.imgur.com/pSTTXkS.png" alt="" />
        </a>
      </div>
    );
  }
}

export default BegHomePage;
