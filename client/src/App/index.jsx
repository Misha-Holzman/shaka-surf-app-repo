/* eslint-env browser */
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";
import LoginForm from "../LoginForm";
import BegHomepage from "../BegHomepage";
import IntHomepage from "../IntHomepage";
import AdvHomepage from "../AdvHomepage";
import SearchForm from '../SearchForm';
import Navbar from "../Navbar";
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
        <div className="">
        <BegHomepage />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
