/* eslint-env browser */
import React   from 'react';
import { hot } from 'react-hot-loader';
import axios   from 'axios';
import LoginForm from '../LoginForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.checkLogin(),
    };
    this.getAllStudents = this.getAllStudents.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
  }

  // componentDidMount() {
  //   this.getAllStudents();
  // }

  checkLogin() {
    return !!localStorage.getItem('access-token');
  }

  async getAllStudents() {
    const { data: { students } } = await axios.get('/api/students');
    this.setState({ students });
  }

  async tryLogin({ email, password }) {
    const { data: { access_token } } = await axios.post('/auth/login', { email, password });
    localStorage.setItem('access-token', access_token );
    this.setState({
      isLoggedIn: this.checkLogin(),
    });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <section className="section">
        <div className="container">
          {
            (!isLoggedIn) ? (
              <LoginForm submitAction={this.tryLogin} />
            ) : (
              <span>
                <h1 className="title">Hello Christian!</h1>
                <button>Log out</button>
              </span>
            )
          }

        </div>
      </section>

    );
  }
}

export default hot(module)(App);
