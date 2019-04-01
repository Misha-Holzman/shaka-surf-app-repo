import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import 'bulma';
import './style.css';

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zipInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleChange (e) {
    // this.props.onZipcodeChange(e.target.value);
    let enteredZipcode = e.target.value

    this.setState({
      zipInput: enteredZipcode
    })
  }

  async handleSubmit (e) {
    if (this.state.zipInput.length === 5) {
      this.props.onZipcodeChange(this.state.zipInput)
    }
    event.preventDefault()
  }

  render () {
    // const zipcode = this.props.zipcode;
    return (
      <div className='search-form-container'>
        <form onSubmit={this.handleSubmit} className='theForm'>
          <label className='input-text'>
            <input
              className='input-text'
              type='text'
              value={this.state.zipInput}
              onChange={this.handleChange}
              maxLength='5'
            />
          </label>
          <button onClick={this.handleSubmit} type='submit' className='input-submit'>Enter</button>
        </form>
      </div>
    )
  }
}

export default SearchBar
