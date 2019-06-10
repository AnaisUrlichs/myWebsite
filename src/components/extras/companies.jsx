import React, { Component } from "react";
import ReactHover from "react-hover";

class Companies extends React.Component {
  render() {
    return (
      <div className="flexContainer">
        <div className="company_boxes">
          <ReactHover>
            <ReactHover.Trigger type="trigger">
              <h5>IT Project Management</h5>
              <img
                id="noris_network"
                src={require("./image/general/noris_network.png")}
              />
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <a
                href="https://www.noris.de/ihr-premium-it-dienstleister/"
                target="_blank"
              >
                <div id="text_box">
                  <p>
                    Assistant to head of Department. Planning 360 Degree
                    Feedback & Sprint Planning.
                  </p>
                </div>
              </a>
            </ReactHover.Hover>
          </ReactHover>
        </div>

        <div className="company_boxes">
          <ReactHover>
            <ReactHover.Trigger type="trigger">
              <h5>Front-end Development</h5>
              <img
                id="noris_network"
                src={require("./image/general/meelogic.png")}
              />
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <a href="https://www.meelogic.com/en/" target="_blank">
                <div id="text_box">
                  <p>Contributing to the Development of the Intranet.</p>
                </div>
              </a>
            </ReactHover.Hover>
          </ReactHover>
        </div>

        <div className="company_boxes">
          <ReactHover>
            <ReactHover.Trigger type="trigger">
              <h5>Researcher for blockchain-based technologies</h5>
              <img
                id="noris_network"
                src={require("./image/general/eden_block.png")}
              />
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <a href="https://www.edenblock.com" target="_blank">
                <div id="text_box">
                  <p>
                    Analysing Projects & academic research in technical reports.
                  </p>
                </div>
              </a>
            </ReactHover.Hover>
          </ReactHover>
        </div>
      </div>
    );
  }
}

export default Companies;
