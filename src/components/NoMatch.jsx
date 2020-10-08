import React, { Component } from "react";
import "./NoMatch.css";
import Fade from "react-reveal/Fade";

export default class Work extends Component {
  render() {
    return (
      <div className="pageHeight">
        <div className="navSpace" />

        <div className="error">
          <Fade bottom>
            <h5>Error</h5>
            <h3>This page does not exist. Please choose another one!</h3>

            <div className="errorButtons">
              <div>
                <a href="/">
                  <div className="buttonError">
                    <h5>Work</h5>
                  </div>
                </a>
              </div>

              <div>
                <a href="/about">
                  <div className="buttonError">
                    <h5>About</h5>
                  </div>
                </a>
              </div>

              <div>
                <a href="/contact">
                  <div className="buttonError">
                    <h5>Contact</h5>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
