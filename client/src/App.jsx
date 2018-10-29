import React   from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import 'bulma';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.getAllStudents = this.getAllStudents.bind(this);
  }

  componentDidMount() {
    this.getAllStudents();
  }

  async getAllStudents() {
    const { data: { students } } = await axios.get('/api/students');
    this.setState({ students });
  }

  render() {
    const { students } = this.state;
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello Students</h1>
          {
            students.map((s, key) => <p key={key}><small>{key}</small> {s.name}</p>)
          }
        </div>
      </section>

    );
  }
}

export default hot(module)(App);
