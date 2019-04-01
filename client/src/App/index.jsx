/* eslint-env browser */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from '../LoginForm';
import BegHomepage from '../BegHomepage';
import IntHomepage from '../IntHomepage';
import AdvHomepage from '../AdvHomepage';
import QuoteAndImage from '../QuoteAndImage';
import TitleOfBestSpots from '../TitleOfBestSpots';
import News from '../News';
import Navbar from '../Navbar';
import Mapbox from '../Map';
import './style.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };

  //   this.getAllUsers = this.getAllUsers.bind(this);
  //   this.tryLogin = this.tryLogin.bind(this);
  //   this.logout = this.logout.bind(this);
  
  // }

  render () {
    return (
      <div className='main-container'>
        <Navbar />
        <div className='content'>
          <BegHomepage />
          <TitleOfBestSpots />
          <QuoteAndImage />
          <News />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
