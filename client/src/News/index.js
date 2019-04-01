import React, { Component } from "react";
import "./style.css";
import { NewSigningKeyInstance } from "twilio/lib/rest/api/v2010/account/newSigningKey";

class News extends Component {
  render() {
    return (
      <div className="container-4">
        <div className="forecast-container" id="forcast">
          <h1 className="forecast-title">Surfing News</h1>
          {/* stick a carosel here with some current event stories  */}
        </div>
      </div>
    );
  }
}

export default News