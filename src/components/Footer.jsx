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
                <a href="https://www.youtube.com/channel/UCb4mfRT5UWpjoUQRcIE2qOQ?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-labelledby="emoji">📹</span>YouTube
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://devops.anaisurl.com/" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-labelledby="emoji">⚙️</span>DevOps Diary
                </a>
              </p>
            </div>
            <div>
              <p>
                <a
                  href="https://www.linkedin.com/in/urlichsanais/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <span role="img" aria-labelledby="emoji">🏆</span>LinkedIn
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://github.com/AnaisUrlichs" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-labelledby="emoji">🤓</span>GitHub
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://twitter.com/urlichsanais" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-labelledby="emoji">🐦</span>Twitter
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://blog.anaisurl.com/" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-labelledby="emoji">📰</span>Blog
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
