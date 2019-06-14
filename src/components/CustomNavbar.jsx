/*import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {

  class CustomNavbar extends Component {
  state = {
    collapse1: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    return (
      <Navbar className="navColor" expand="lg">
        <Navbar.Brand href="/">Anaïs Urlichs</Navbar.Brand>
        <MDBHamburgerToggler
                color="#6b0000"
                id="hamburger1"
                onClick={() => this.toggleSingleCollapse("collapse1")}
              />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
          <Nav className="mr-auto" pullRight>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="mailto:urlichsanais@gmail.com">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://medium.com/@urlichsanais"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}*/

import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler
} from "mdbreact";
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  state = {
    collapse1: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBNavbar id="styleNav">
          <MDBContainer>
            <MDBNavbarBrand>
              <MDBNavLink className="NavLink" to="/">
                <img
                  id="signature"
                  src={require("./extras/image/general/Signature.png")}
                />
              </MDBNavLink>
            </MDBNavbarBrand>
            <MDBHamburgerToggler
              color="#6b0000"
              id="hamburger1"
              onClick={() => this.toggleSingleCollapse("collapse1")}
            />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav>
                <MDBNavItem>
                  <MDBNavLink to="/" id="links">
                    Work
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about" id="links">
                    About
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/contact" id="links">
                    Contact
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="https://medium.com/@urlichsanais" id="links">
                    Blog
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default CustomNavbar;
