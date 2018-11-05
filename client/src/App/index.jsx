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
      expLevel: ""
    };

    this.getAllStudents = this.getAllStudents.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
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

  async tryLogin({ email, password }) {
    const {
      data: { access_token }
    } = await axios.post("/auth/login", { email, password });
    localStorage.setItem("access-token", access_token);
    this.setState({
      isLoggedIn: this.checkLogin()
    });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="main-container">
          {!isLoggedIn ? (
            <LoginForm submitAction={this.tryLogin} />
          ) : (
            <span>
              <h1 className="title">Hello Misha!</h1>
              <button>Log out</button>
            </span>
          )}
          <BegHomePage />
      </div>

    );
  }
}

export default hot(module)(App);
