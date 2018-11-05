/* eslint-env browser */
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";
import LoginForm from "../LoginForm";
import BegHomePage from "../BegHomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.checkLogin(),
      expLevel: "",
      username: ""
    };

    this.getAllStudents = this.getAllStudents.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  // componentDidMount() {
  //   this.getAllStudents();
  // }

  checkLogin() {
    return !!localStorage.getItem("access-token");
  }

  async getAllStudents() {
    const {
      data: { students }
    } = await axios.get("/api/students");
    this.setState({ students });
  }

  async tryLogin({ email, password, username }) {
    const {
      data: { access_token }
    } = await axios.post("/auth/login", { email, password });
    localStorage.setItem("access-token", access_token);
    this.setState({
      isLoggedIn: this.checkLogin(),
      username: username
    });
  }

  logout() {
    localStorage.clear();
    console.log('clicked')
  }


  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="main-container">
          {!isLoggedIn ? (
            <LoginForm submitAction={this.tryLogin} />
          ) : (
            <span>
              <h1 className="title">Hello {this.state.username}</h1>
              <button type='submit' submitAction={this.logout}>Logout</button>
            </span>
          )}

          <BegHomePage />
      </div>

    );
  }
}

export default hot(module)(App);
