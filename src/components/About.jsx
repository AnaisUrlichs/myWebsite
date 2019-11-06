import React, { Component } from "react";
import "./About.css";
import CountUp from "react-countup";
import Conf from "./extras/Conf.jsx";
import Fade from "react-reveal/Fade";
import ScrollToTopOnMount from "./ScrollTop.jsx";
import CardShe from "./extras/cardShe.jsx";
import CardVegan from "./extras/cardVegan.jsx";
import SimpleSwiperWithParams from "./extras/simpleSwiperWithParams";

export default class About extends Component {
  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <div className="navSpace" />

        <div className="topImage">
          <img
            className="snowImage"
            src={require("./extras/image/general/snowImage.png")}
          />
          <h3>You've made it this far! Welcome to my corner of the web!</h3>
        </div>

        <div className="statistics">
          <h3>We all love data!</h3>
          <div className="flex-container">
            <div>
              <h5>countries I have lived in</h5>
              <CountUp end={5} duration={15} delay={2} className="counter" />
            </div>
            <div>
              <h5>Books I've read this year</h5>
              <CountUp end={16} duration={15} delay={2} className="counter" />
            </div>
            <div>
              <h5>Languages I speak</h5>
              <CountUp end={3} duration={15} delay={2} className="counter" />
            </div>
          </div>
        </div>

        <div className="mentoring">
          <Fade bottom>
            <h5>Mentoring</h5>
            <h3>Let's Chat</h3>

              <div className="gridContainer">
                <div className="grid-item-left">
                <p>I was lucky enought to meet some amazing people, who took extra interest in my education and personal success! 
              A mentor can make all the difference. If you are interested in having a chat, please reach out. 
              I love learning from others and share my knowledge. Below are two of the organisations that I have mentees in.</p>
                </div>
                <div className="grid-item-right">
                  <div>
                    <CardShe />
                  </div>
                  <div>
                    <CardVegan />
                  </div>
                </div>
              </div>

            <a href="/contact">
              <div className="buttonTouchAbout">
                <h5>Get in touch</h5>
              </div>
            </a>
          </Fade>
        </div>

        <div className="hobbies">
          <Fade bottom>
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
          </Fade>
        </div>
      </div>
    );
  }
}
