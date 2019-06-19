import React, { Component } from "react";
import "./Footer.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <div className="footer">
        <div className="box_one">
          <p>Copyright © Anaïs Urlichs</p>
        </div>
        <div className="box_two">
          <div>
            <p>
              <a
                href="https://www.linkedin.com/in/urlichsanais/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="https://github.com/AnaisUrlichs" target="_blank">
                GitHub
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="https://twitter.com/urlichsanais" target="_blank">
                Twitter
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="https://medium.com/@urlichsanais" target="_blank">
                Blog
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
