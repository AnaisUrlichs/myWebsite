import React, { Component } from "react";
import "./Work.css";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import ScrollToTopOnMount from "./ScrollTop.jsx";
import Experience from "./extras/experience.jsx";
import Listofwhatido from "./extras/Listofwhatido.jsx";

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
              <p>Technical Writing</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="three" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Community Management & Public Speaking</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="four" />
                </Slide>
              </span>
            </div>

            <div>
              <p>React, HTML5 & CSS3</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="five" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Typescript</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="six" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Symfony PhP framework</p>
              <span className="bar">
                <Slide left duration="5000s">
                  <span className="seven" />
                </Slide>
              </span>
            </div>

            <div>
              <p>Java</p>
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
                href="https://blog.anaisurl.com/blockchain-intro-series-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h5>replicated ledgers</h5>
                </div>
              </a>
              <a
                href="https://blog.anaisurl.com/blockchain-intro-series-3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h5>scalability solutions</h5>
                </div>
              </a>
              <a
                href="https://blog.anaisurl.com/blockchain-intro-series-2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h5>consensus mechanisms</h5>
                </div>
              </a>
              <a
                href="https://blog.anaisurl.com/blockchain-intro-series-4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h5>cryptography</h5>
                </div>
              </a>
              <a
                href="https://blog.anaisurl.com/blockchain-intro-series-5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h5>governance</h5>
                </div>
              </a>

              <a
                href="https://blog.anaisurl.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div ckassName="additional_writing">
                  <h5>And More!</h5>
                </div>
              </a>
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
