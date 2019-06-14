import React, { Component } from "react";
import "./About.css";
import CountUp from "react-countup";
import Conf from "./extras/Conf.jsx";
import Food from "./extras/Food.jsx";
import Fade from "react-reveal/Fade";

export default class About extends Component {
  render() {
    return (
      <div>
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
              <h5>pets I have had throughout my life</h5>
              <CountUp end={11} duration={15} delay={2} className="counter" />
            </div>
            <div>
              <h5>Languages I speak</h5>
              <CountUp end={3} duration={15} delay={2} className="counter" />
            </div>
          </div>
        </div>

        <div className="confGallery">
          <Fade bottom>
            <h5>Gallery</h5>
            <h3>Conferences organised & fairs went to</h3>
            <Conf />
          </Fade>
        </div>

        <div className="mentoring">
          <Fade bottom>
            <h5>Mentoring</h5>
            <h3>Tranform your diet!</h3>
            <p>
              I am a mentor at{" "}
              <a href="https://veganoutreach.org/" id="veganOutreach">
                Vegan Outreach
              </a>{" "}
              since mid 2018. If you are interested in how humans can thrive on
              a balanced plant-based diet, drop me a message!
            </p>
            <a href="/contact">
              <div className="buttonTouchAbout">
                <h5>Get in touch</h5>
              </div>
            </a>
          </Fade>
        </div>

        <div className="foodGallery">
          <Fade bottom>
            <h5>Gallery</h5>
            <h3>But what do vegans eat?</h3>

            <Food />
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
