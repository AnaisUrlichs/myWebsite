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
                  src={require("./extras/image/general/logo.png")}
                  onClick={() => this.toggleSingleCollapse("collapse1")}
                />
              </MDBNavLink>
            </MDBNavbarBrand>
            <MDBHamburgerToggler
              color="#6b0000"
              id="hamburger1"
              onClick={() => this.toggleSingleCollapse("collapse1")}
              onScroll={() => this.toggleSingleCollapse("collapse1")}
            />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav>
                <MDBNavItem>
                  <MDBNavLink
                    to="/"
                    id="links"
                    onClick={() => this.toggleSingleCollapse("collapse1")}
                  >
                    Work
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="/about"
                    id="links"
                    onClick={() => this.toggleSingleCollapse("collapse1")}
                  >
                    About
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="/contact"
                    id="links"
                    onClick={() => this.toggleSingleCollapse("collapse1")}
                  >
                    Contact
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
