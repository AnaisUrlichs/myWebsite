import React, { Component } from "react";
import "./Footer.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <div className="placing">
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
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://github.com/AnaisUrlichs" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://twitter.com/urlichsanais" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://blog.anaisurl.com/" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
