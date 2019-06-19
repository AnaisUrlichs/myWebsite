import React, { Component } from "react";
import "./Contact.css";
import ScrollToTopOnMount from "./ScrollTop.jsx";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  subject: "",
  fnameError: "",
  lnameError: "",
  emailError: "",
  subjectError: ""
};

export default class Contact extends Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let fnameError = "";
    let lnameError = "";
    let emailError = "";
    let subjectError = "";
    // let passwordError = "";

    if (!this.state.fname) {
      fnameError = "First name cannot be blank";
    }

    if (!this.state.lname) {
      lnameError = "Last name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (!this.state.subject) {
      subjectError = "Subject cannot be blank";
    }

    if (emailError || fnameError || lnameError || subjectError) {
      this.setState({ emailError, fnameError, lnameError, subjectError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    } else {
      event.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <div className="navSpace" />
        <div className="contact">
          <h5>Let's Chat!</h5>
          <div>
            <form
              action="https://formspree.io/urlichsanais@gmail.com"
              method="POST"
            >
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  className="fname"
                  name="fname"
                  placeholder="Your name.."
                  value={this.state.fname}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.fnameError}
                </div>
              </div>

              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  className="lname"
                  name="lname"
                  placeholder="Your last name.."
                  value={this.state.lname}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.lnameError}
                </div>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  className="email"
                  name="email"
                  placeholder="Your email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailError}
                </div>
              </div>

              <div>
                <label>Reason for contact</label>
                <select name="reason" className="reason">
                  <option>Work with me!</option>
                  <option>I want to mentor you!</option>
                  <option>Let's chat!</option>
                  <option>Mentor Me!</option>
                  <option>Speaking Opportunity!</option>
                </select>
              </div>

              <div>
                <label>Subject</label>
                <textarea
                  className="subject"
                  name="subject"
                  placeholder="Write something.."
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.subjectError}
                </div>
              </div>
              <div className="status" />
              <div>
                <input
                  type="submit"
                  value="Submit"
                  className="buttonContact"
                  onClick={this.handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
