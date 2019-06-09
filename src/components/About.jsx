import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="navSpace" />
        <img className="snowImage" src={require("./image/snowImage.png")} />

        <div className="statistics">
          <h3>Random figures</h3>
          <h5>countries visited</h5>
          <h5>pets I have had throughout my life</h5>
          <h5>Languages I speak</h5>
        </div>

        <div className="personalGallery" />
        <div className="hobbies">
          <h5>Hobbies</h5>
          <h3>All about a positive work-life balance</h3>

          <div className="flex-container" id="hobbies">
            <div id="cooking">
              <h5>Cooking</h5>
            </div>
            <div id="reading">
              <h5>A good book and some tea</h5>
            </div>
            <div id="travelling">
              <h5>Travelling</h5>
            </div>
            <div id="sports">
              <h5>Sports</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
