import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import LoginForm from '../LoginForm';
import './style.css';

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: this.checkLogin()
      // username: ""
    }

    // this.getAllUsers = this.getAllUsers.bind(this);
    this.tryLogin = this.tryLogin.bind(this)
    this.logout = this.logout.bind(this)
  }

  // componentDidMount() {
  //   this.getAllUsers();
  // }

  checkLogin () {
    return !!localStorage.getItem('access-token')
  }

  // this function was getAllStudents:
  // Tried to wire the username into state but does not work yet.

  // async getAllUsers({ username }) {
  //   const {
  //     data: { access_token }
  //   } = await axios.get("/auth/login", { username });
  //   this.setState({
  //     username: username
  //   });
  // }

  async tryLogin ({ email, password }) {
    const {
      data: { access_token }
    } = await axios.post('/auth/login', { email, password })
    localStorage.setItem('access-token', access_token)
    this.setState({
      isLoggedIn: this.checkLogin()
    })
  }

  async logout () {
    localStorage.clear()
    window.location.reload()
    console.log('clicked')
  }

  render () {
    const { isLoggedIn } = this.state
    return (
      <div className='nav-container'>
        <ul className='nav'>
          <li className='forcasts-link'>
            <a href='#forcast' className='nav-text-links'>
              Forecasts
            </a>
          </li>
          <li className='news-link'>           
            <a href='/clients/' className='nav-text-links'>
              News
            </a>
          </li>
          <li>
            <img src='https://i.imgur.com/mdLJQJc.png' className='logo-img' />
          </li>
          <li>
            <a href='/clients/' className='nav-text-links'>
              Media
            </a>
          </li>
          <li>
            <a href='#bestSpots' className='nav-text-links'>
              Destinations
            </a>
            {/*
            <div>
              
              // login form not functioning yet.
              
              {!isLoggedIn ? (
                <LoginForm submitAction={this.tryLogin} />
              ) : (
                <span>
                  <button type='submit' onClick={this.logout} className='logout-button'>
                    Logout
                  </button>
                </span>
              )} 
              
            </div>
            */}
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
