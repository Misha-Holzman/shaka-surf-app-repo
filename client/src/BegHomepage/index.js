import React, { Component } from 'react';
import Axios from 'axios';
import SearchBar from '../SearchForm';
import SurfReport from '../SurfReport';
import Navbar from '../Navbar';
import './style.css';

class BegHomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      surfInfo: {},
      userZipcode: '',
      currentLocation: []
    }
    this.getSurfReport = this.getSurfReport.bind(this)
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this)
    this.getBrowserLocation = this.getBrowserLocation.bind(this)
  }

  // if location is 5 char string, hit the api to return lat long
  // if location is array, hit the api to return zip

  async handleZipcodeChange (userZipcode) {
    const currentLocation = await this.convertZip(userZipcode)
    this.getSurfReport(currentLocation)
    this.setState({
      userZipcode,
      currentLocation
    })
  }

  async convertZip (zip) {
    // const weatherAPIkey = 'u9Ayipu6q9JX9DVPmAAGOZcxu0yDbn795LdVNvgicZZ61FmJpyxFLgHQqf7qU8GB';
    const apiURL = `http://api.zippopotam.us/us/${zip}`
    try {
      const {
        data: {
          places: [place]
        }
      } = await Axios.get(apiURL)
      return place
    } catch (e) {
      throw e
    }
  }

  async getWeather (weatherLocation) {
    const weatherAPIkey = '599c036f83af44d0963180454190104';
    const apiURL = `http://api.worldweatheronline.com/premium/v1/marine.ashx?format=JSON&key=${weatherAPIkey}&q=${weatherLocation}`
    try {
      const {
        data: {
          data: { weather }
        }
      } = await Axios.get(apiURL)

      return weather
    } catch (e) {
      throw e
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
  async getSurfReport (location) {
    let place = location

    if (!('latitude' in location)) {
      place = await this.convertZip(location)
    }

    const [weatherData] = await this.getWeather([
      place.latitude,
      place.longitude
    ])

    const morningReport = weatherData.hourly[2]
    const { weatherDesc: [ { value: weatherDescription } ] } = morningReport

    if (!weatherDescription) {
      debugger
    }
    const surfInfo = {
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
      weatherDescription,
      swellHeight_ft: weatherData.hourly[2].swellHeight_ft,
      swellPeriod_secs: weatherData.hourly[2].swellPeriod_secs,
      swellDirection: weatherData.hourly[2].swellDir16Point,
      waterTemp: weatherData.hourly[2].waterTemp_F
    }

    this.setState({ surfInfo })
  }

  getBrowserLocation () {
    const locationObtained = ({ coords: { latitude, longitude } }) => {
      this.getSurfReport({ latitude, longitude })
      //do_something(position.coords.latitude, position.coords.longitude);

    };

    const locationDenied = err => {

    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        locationObtained,
        locationDenied
      )
    }
  }

  componentDidMount () {
    this.getBrowserLocation()
  }

  render () {
    const { surfInfo, currentLocation } = this.state
    const zipcode = this.state.userZipcode
    return (
      <div className='container-1'>
        <div className='enter-loc-prompt'>
          <h3 className='enterZip'>Enter Zip Code:</h3>
          <SearchBar onZipcodeChange={this.handleZipcodeChange} />
        </div>
        {
          (surfInfo && 'weatherDescription' in surfInfo)
          // || zipcode.length === 5
          ? (
              <SurfReport surfInfo={surfInfo} locationName={currentLocation['place name']} />
            ) : (
              console.log('no data found')
            )} 
        <a href='#bestSpots'>
          <img className='arrow' src='https://i.imgur.com/pSTTXkS.png' alt='' />
        </a>
      </div>
    )
  }
}

export default BegHomePage
