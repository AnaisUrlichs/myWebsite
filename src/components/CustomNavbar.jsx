import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar className="navColor" expand="lg">
        <Navbar.Brand href="/">Anaïs Urlichs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
                <a class="nav-link" href="/contact">
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
}
