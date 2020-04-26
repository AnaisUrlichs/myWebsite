import React, { Component } from "react";
import "./Work.css";
import SpeakingVideos from "./extras/SpeakingVideos.jsx";
import Companies from "./extras/companies.jsx";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import ScrollToTopOnMount from "./ScrollTop.jsx";
import Experience from "./extras/experience.jsx";

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
            />
            <div id="outBox" />
          </div>
        </div>

        <div className="skillBar">
          <Fade bottom>
            <h5>Skills</h5>
            <h3>My top skills!</h3>

            <div>
              <p>Research & Analysis</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="one" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Product Management</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="three" />
                </Slide>
              </span>
            </div>

            <div>
              <p>HTML5 & CSS3</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="four" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Symfony PhP framework</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="five" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Java OOP</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="six" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Bootstrap</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="seven" />
                </Slide>
              </span>
            </div>

            <div>
              <p>JavaScript React</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="eight" />
                </Slide>
              </span>
            </div>
          </Fade>
        </div>

        <div className="research">
          <Fade bottom>
            <h5>Research</h5>
            <h3>+150 technical papers and summaries - Samples below!</h3>

            <p>
              I got interested in distributed ledger technologies at the end of
              2017, driven by my earlier interest in network security. Working
              for a VC in the space, I was in charge of creating thematic and
              macro focused research reports for cryptoassets and blockchain
              technologies, collecting, synthesizing, and summarizing a wide
              range of content including articles, blog posts, and third-party
              research. As of today, I've written over 150 research papers and
              summaries on a variety of related topics. Below are some summaries
              of my research efforts.
            </p>

            <div className="flex-container" id="research">
              <a
                href="https://docs.google.com/document/d/10YHtXsPkVzjdSPXh72nWDxi84-aTv05tNTeuvKjZhN8/edit?usp=sharing"
                target="_blank"
              >
                <div>
                  <h5>replicated ledgers</h5>
                </div>
              </a>
              <a
                href="https://docs.google.com/document/d/1wHBXuzomF2WAbSvHWeerxceKLUYojrHUrwm0zo8K4-M/edit?usp=sharing"
                target="_blank"
              >
                <div>
                  <h5>scalability solutions</h5>
                </div>
              </a>
              <a
                href="https://docs.google.com/document/d/1-OLzmz3_hHrdSkv9HSnPVl6rIPtpyQW5P-0BzODfKjM/edit?usp=sharing"
                target="_blank"
              >
                <div>
                  <h5>consensus mechanisms</h5>
                </div>
              </a>
              <a
                href="https://docs.google.com/document/d/1xQsJU3J7woJ2HgNz03IMN2B7gTHBiPfvJg4CPugsvbU/edit?usp=sharing"
                target="_blank"
              >
                <div>
                  <h5>cryptography</h5>
                </div>
              </a>
              <a
                href="https://docs.google.com/document/d/1NopYOyiXUGo-CC5BbdnBBASDviUlPPiSV8EzGiUS2LQ/edit?usp=sharing"
                target="_blank"
              >
                <div>
                  <h5>governance</h5>
                </div>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1oIr7wIwyJuR71ynS_M5S4Y4jgrK92lUt?usp=sharing"
                target="_blank"
              >
                <div ckassName="additional_writing">
                  <h5>And More!</h5>
                </div>
              </a>
            </div>
          </Fade>
        </div>

        <div className="blog">
          <Fade bottom>
            <h5>Blog</h5>
            <h3>Additional writings</h3>
            <p>
              You can find a collection of additional writings on my Medium
              Blog.
            </p>
            <div>
              <a href="https://anaisurlichs.ghost.io/">
                <div className="buttonTouchOne">
                  <h5>Blog</h5>
                </div>
              </a>
            </div>
          </Fade>
        </div>

        <div className="speaking">
          <Fade bottom>
            <h5>Speaking</h5>
            <h3>Talking about my Research!</h3>

            <SpeakingVideos />
          </Fade>
        </div>

        <div className="companies">
          <Fade bottom>
            <h5>Experience</h5>
            <h3>Some of the companies that I have worked with</h3>

            <Experience />
          </Fade>
        </div>

        <div className="devider" />

        <div className="hire">
          <Fade bottom>
            <h5>Collaborating</h5>
            <h3>Let's start creating!</h3>
            <p>
              If you are looking for a curious, passionate, and hard-working
              individual to contribute to your front-end development,
              technical-writing, or research, please get in touch! Looking
              forward hearing from you!
            </p>
            <div>
              <a href="/contact">
                <div className="buttonTouch">
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
