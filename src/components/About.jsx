import React, { Component } from "react";
import "./About.css";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import ScrollToTopOnMount from "./ScrollTop.jsx";
import Mentorship from "./extras/mentorship.jsx";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <ScrollToTopOnMount />

        <div className="topImage">
          <img
            className="snowImage"
            src={require("./extras/image/general/snowImage.png")}
            alt="selfie in snow"
          />
          <h3>You've made it this far! Welcome to my corner of the web!</h3>
        </div>

        <div className="myStory">
          <Fade bottom>
              <h5>My Story</h5>
              <h3>A Glimpse of Myself</h3>
              <div className="gridContainer">
                <div className="grid-item-left" id="first-grid-container">
                  <p>I grew up in Germany but had a chance to spend my studies both in the UK and in Spain. 
                    My first undergraduate degree was in Information Management. With an original interest in Cyber Security some friends introduced me to the blockchain space.
                    To fuel my interest I started working as Technical Analyst for an Israeli VC fund while starting a Computer Science Degree.
                    Several years later, after multiple engineering internships and various job experience, I have now found my place as Developer Advocate, 
                    while still working on completing my CS degree.</p>
                </div>
                <div className="grid-item-photo">
                  <img
                    id="presenting"
                    src={require("./extras/image/general/presentation.png")}
                    alt="giving a presentation"
                  />
                </div>
              </div>
              <div className="statistics">
                <div className="flex-container">
                  <div>
                    <h5>countries I have lived in</h5>
                    <CountUp end={5} duration={10} delay={2} className="counter" />
                  </div>
                  <div>
                    <h5>Books I've read this year</h5>
                    <CountUp end={16} duration={10} delay={2} className="counter" />
                  </div>
                  <div>
                    <h5>Languages I speak</h5>
                    <CountUp end={3} duration={10} delay={2} className="counter" />
                  </div>
                </div>
              </div>
          </Fade>
        </div>

        <div className="mentoring">
          <Fade bottom>
            <h5>Mentoring</h5>
            <h3>Let's Chat</h3>

              <div className="gridContainer">
                <div className="grid-item-left">
                <p>I was lucky enough to meet some amazing people, who took extra interest in my education and personal success! 
              A mentor can make all the difference. If you are interested in having a chat, please reach out. 
              I love learning from others and sharing my experience. On the right are two of the organisations that I have mentees in.</p>
                </div>
                <div className="grid-item-right">
                    <Mentorship />
                </div>
              </div>

              <div>
                <a href="/contact">
                  <div className="buttonTouchAbout">
                    <h5>Get in touch</h5>
                  </div>
                </a>
              </div>
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
