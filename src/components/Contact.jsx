import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  function() {
    this.$(".submit").click(function(event) {
      event.preventDefault();
      console.log("clicked button");

      var fname = ".fname".val();
      var lname = ".lname".val();
      var email = ".email".val();
      var subject = ".subject".val();
      var statusElm = ".status";

      statusElm.empty();

      if (email.length > 5 && email.includes("@") && email.includes(".")) {
        statusElm.append("<div>Email is valid</div>");
      } else {
        statusElm.append("<div>Your email is not valid</div>");
      }

      if (fname.length > 2) {
        statusElm.append("<div>The first name is valid</div>");
      } else {
        statusElm.append("<div>Your first name is not valid</div>");
      }

      if (lname.length > 2) {
        statusElm.append("<div>The last name is valid</div>");
      } else {
        statusElm.append("<div>Your last name is not valid</div>");
      }

      if (subject.length > 10) {
        statusElm.append("<div>The subject is valid</div>");
      } else {
        statusElm.append("<div>Your subject is not valid</div>");
      }
    });
  }

  render() {
    return (
      <div>
        <div className="navSpace" />
        <div className="App">
          <p>Contact Me</p>
          <div>
            <form>
              <label>First Name</label>
              <input
                type="text"
                className="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label>Last Name</label>
              <input
                type="text"
                className="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label>Email</label>
              <input
                type="email"
                className="email"
                name="email"
                placeholder="Your email"
              />

              <label>Subject</label>
              <textarea
                className="subject"
                name="subject"
                placeholder="Write something.."
              />

              <div className="status" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
