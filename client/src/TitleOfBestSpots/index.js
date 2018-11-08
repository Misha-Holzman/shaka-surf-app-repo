import React, { Component } from "react";
import "./style.css";

class TitleOfBestSpots extends Component {
  render() {
    return (
      <div className="spot-suggest-title">
      <div id="bestSpots"></div>

      {/*change the experience level based on state*/}
        <h1 className="best-spot-title">Best Surf Spots for a *Beginner!</h1>
        <div id="press">
        <div className="press-container hover11">
          <div className="img-container">
            <a
              href="https://www.villagevoice.com/2016/09/28/a-bold-take-on-taiwanese-street-food-in-east-williamsburg/"
              target="_blank"
            >
              <img src="https://i.imgur.com/oUVUH32.png" alt="" className="img" />
            </a>
          </div>
          <div className="img-container">
            <a
              href="http://www.grubstreet.com/2016/05/win-son-modern-taiwanese-brooklyn-opening.html"
              target="_blank"
            >
              <img src="https://i.imgur.com/zWbKjhf.png" alt="" className="img"/>
            </a>
          </div>
          <div className="img-container">
            <a
              href="https://www.villagevoice.com/2017/06/27/boys-meet-grill-when-the-guys-behind-win-son-got-together-it-was-love-at-first-bite/"
              target="_blank"
            >
              <img src="https://i.imgur.com/i2veK1o.png" alt="" className="img"/>
            </a>
          </div>
          <div className="img-container">
            <a
              href="https://ny.eater.com/2018/2/27/17053136/win-son-nyc-review-two-stars-taiwanese-american"
              target="_blank"
            >
              <img src="https://i.imgur.com/s1j1X8B.png" alt="" className="img"/>
            </a>
          </div>
          <div className="img-container">
            <a
              href="https://ny.eater.com/maps/best-taiwanese-food-nyc-brooklyn-queens-manhattan"
              target="_blank"
            >
              <img src="https://i.imgur.com/BlwUBqT.png" alt="" className="img"/>
            </a>
          </div>
          <div className="img-container">
            <a
              href="https://www.theinfatuation.com/new-york/reviews/win-son"
              target="_blank"
            >
              <img src="https://i.imgur.com/AlmNNKm.png" alt="" className="img"/>
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TitleOfBestSpots;
