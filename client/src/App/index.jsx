/* eslint-env browser */
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";
import LoginForm from "../LoginForm";
import BegHomepage from "../BegHomepage";
import IntHomepage from "../BegHomepage";
import AdvHomepage from "../BegHomepage";
import Navbar from "../Navbar";
import "./style.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: this.checkLogin(),
  //     username: ""
  //   };

  //   this.getAllUsers = this.getAllUsers.bind(this);
  //   this.tryLogin = this.tryLogin.bind(this);
  //   this.logout = this.logout.bind(this);
  // }

  // // componentDidMount() {
  // //   this.getAllUsers();
  // // }

  // checkLogin() {
  //   return !!localStorage.getItem("access-token");
  // }

  // // this function was getAllStudents:
  // // Tried to wire the username into state but does not work yet.
  // async getAllUsers({ username }) {
  //   const {
  //     data: { access_token }
  //   } = await axios.get("/test", { username });
  //   localStorage.setItem("username", username);
  //   this.setState({
  //     username: username
  //   });
  // }

  // async tryLogin({ email, password }) {
  //   const {
  //     data: { access_token }
  //   } = await axios.post("/auth/login", { email, password });
  //   localStorage.setItem("access-token", access_token);
  //   this.setState({
  //     isLoggedIn: this.checkLogin()
  //   });
  // }

  // async logout() {
  //   localStorage.clear();
  //   window.location.reload();
  //   console.log("clicked");
  // }



  render() {
    // const { isLoggedIn } = this.state;
    return (
      <div className="main-container">
        <Navbar />
      {/*<div className="logged-in-form">

          {!isLoggedIn ? (
            <LoginForm submitAction={(this.tryLogin)} />
          ) : (
            <span>
              <h1 className="title">Hello _____ {this.state.username}</h1>
              <button type="submit" onClick={this.logout}>
                Logout
              </button>
            </span>
          )}

        </div>*/}



        <BegHomepage />

      </div>
    );
  }
}

export default hot(module)(App);
