/* eslint-env browser */
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";
import LoginForm from "../LoginForm";
import BegHomepage from "../BegHomepage";
import IntHomepage from "../IntHomepage";
import AdvHomepage from "../AdvHomepage";
import SearchForm from "../SearchForm";
import BestDestinations from "../BestDestinations"
import TitleOfBestSpots from "../TitleOfBestSpots"
import Navbar from "../Navbar";
import Mapbox from "../Map";
import "./style.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };

  //   this.getAllUsers = this.getAllUsers.bind(this);
  //   this.tryLogin = this.tryLogin.bind(this);
  //   this.logout = this.logout.bind(this);
  // }


  render() {
    return (
      <div className="main-container">
        <Navbar />
        <div className="content">
        <BegHomepage />
        <TitleOfBestSpots />
        <BestDestinations />
        <Mapbox/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
