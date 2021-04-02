import React, { Component } from "react";
import "./Work.css";
import Fade from "react-reveal/Fade";
import ScrollToTopOnMount from "./ScrollTop.jsx";
import Experience from "./extras/experience.jsx";
import Listofwhatido from "./extras/Listofwhatido.jsx";
import Iframe from 'react-iframe';
import CardDevOps from "./extras/cardDevOps.jsx";

export default class Work extends Component {
  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <div className="navSpace" />
        <div className="flex-container">
          <div id="profile">
            <p id="bodyTitle">Out of the box work!</p>
            <h1 id="mainText">Developer, Writer, Researcher and Speaker!</h1>
          </div>

          <div id="stepOut">
            <img
              id="meSpeaking"
              src={require("./extras/image/general/meSpeaking.png")}
              alt="speaking with a mic"
            />
            <div id="outBox" />
          </div>
        </div>

        <div className="list">
          <Fade bottom>
            <h5>Developer Advocate</h5>
            <h3>Here is what I do</h3>
            <Listofwhatido/>
          </Fade>
        </div>

        <div className="youtube">
          <Fade bottom>
            <h5>DevOps Diary</h5>
            <h3>Making my entire learning journey public</h3>
            <div className="gridContainerVideo" id="gridContainerVideo">
              <div className="grid-item-left-video">
                <Iframe url="https://www.youtube.com/embed/3241WMup0LE"
                  id="youtubevideo"
                  display="initial"
                  position="relative"
                  frameBorder="0"
                  />
              </div>
              <div className="grid-item-right-video">
                <CardDevOps />
              </div>
            </div>
          </Fade>
        </div>

        <div className="companies">
          <Fade bottom>
            <h5>Experience</h5>
            <h3>Some of the companies that I have worked with</h3>
            <Experience />
          </Fade>
        </div>

        <div className="hire">
          <Fade bottom>
            <h5>Collaborating</h5>
            <h3>Let's start creating!</h3>
            <p>
              I love to work on community-driven initiatives, open-source projects, and research. If you would like to collaborate, please reach out.
            </p>
            <div>
              <a href="/contact">
                <div className="buttonTouch" id="get-in-touch-button">
                  <h5>Get in touch</h5>
                </div>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
