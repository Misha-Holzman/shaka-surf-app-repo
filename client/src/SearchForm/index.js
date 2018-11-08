import React, { Component } from "react";
import { GoogleComponent } from "react-google-location";
import "bulma";
import "./style.css";

class SearchBar extends Component {
   constructor(props) {
    super(props);
    this.state = {
      zipInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }



  async handleChange(e) {
    this.props.onZipcodeChange(e.target.value);
    event.preventDefault();
  }



  render() {
    const zipcode = this.props.zipcode;
    return (
      <div className="search-form-container">
        <form onSubmit={this.handleChange}>
          <label className="input-text">
            <input
              className="input-text"
              type="text"
              value={zipcode}
              maxLength="5"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="input-submit">Enter</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
