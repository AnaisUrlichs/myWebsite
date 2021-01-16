import React, { Component } from "react";
import "./Contact.css";
import Iframe from 'react-iframe';

export default class Contact extends Component {
  render() {
    return (
      <div class="wrapper">
        <div className="navSpace" />
        <div className="contact">
          <h5>Let's Chat!</h5>
          <div>

            <Iframe url="https://chilipepper.io/form/wild-crimson-guajillo-f88cb2b7-70e0-46f5-9159-22635b48bcfa"
              width="544px"
              height="600px"
              id="myId"
              class="responsive-iframe"
              display="initial"
              position="relative"
              frameBorder="0"
              />
          </div>
        </div>
        <div class="push"></div>
      </div>
    );
  }
}
