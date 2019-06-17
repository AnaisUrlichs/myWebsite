import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  // handleValidation(event) {
  //   var fname = ".fname";
  //   var lname = ".lname";
  //   var email = ".email";
  //   var subject = ".subject";
  //   var statusElm = ".status";

  //   if (email.length > 5 && email.includes("@") && email.includes(".")) {
  //     statusElm.append("<div>Email is valid</div>");
  //   } else {
  //     event.preventDefault();
  //     statusElm.append("<div>Your email is not valid</div>");
  //   }

  //   if (fname.length > 2) {
  //     statusElm.append("<div>The first name is valid</div>");
  //   } else {
  //     event.preventDefault();
  //     statusElm.append("<div>Your first name is not valid</div>");
  //   }

  //   if (lname.length > 2) {
  //     statusElm.append("<div>The last name is valid</div>");
  //   } else {
  //     event.preventDefault();
  //     statusElm.append("<div>Your last name is not valid</div>");
  //   }

  //   if (subject.length > 10) {
  //     statusElm.append("<div>The subject is valid</div>");
  //   } else {
  //     statusElm.append("<div>Your subject is not valid</div>");
  //   }
  // }

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //first name
    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "Cannot be empty";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["fname"] = "Only letters";
      }
    }

    //last name
    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "Cannot be empty";
    }

    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lname"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <div className="navSpace" />
        <div className="App">
          <p>Contact Me</p>
          <div>
            <form
              action="https://formspree.io/urlichsanais@gmail.com"
              method="POST"
            >
              ><label>First Name</label>
              <input
                type="text"
                className="fname"
                name="firstname"
                placeholder="Your name.."
                onClick={this.handleChange.bind(this, "fname")}
                value={this.state.fields["fname"]}
              />
              <label>Last Name</label>
              <input
                type="text"
                className="lname"
                name="lastname"
                placeholder="Your last name.."
                onClick={this.handleChange.bind(this, "lname")}
                value={this.state.fields["lname"]}
              />
              <label>Email</label>
              <input
                type="email"
                className="email"
                name="email"
                placeholder="Your email"
                onClick={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <label>Subject</label>
              <textarea
                className="subject"
                name="subject"
                placeholder="Write something.."
                onClick={this.handleChange.bind(this, "subject")}
                value={this.state.fields["subject"]}
              />
              <div className="status" />
              <input
                type="submit"
                value="Submit"
                onClick={this.handleValidation()}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
