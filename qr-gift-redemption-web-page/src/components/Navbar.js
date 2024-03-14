import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import paylahwhite from "../assets/white.svg";
import "./Navbar.css";

var navcollapse = {
  border: "1px solid #fc7588",
  marginBottom: "2px",
  backgroundColor: "#fc7588",
  color: "#fff1f3"
};

class Navibar extends Component {
  state = {};
  render() {
    return (
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="xs"
        bg="paylahpink"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img src={paylahwhite} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={navcollapse} href="/sending">
              Sending
            </Nav.Link>
            <Nav.Link style={navcollapse} href="/success">
              Success
            </Nav.Link>
            <Nav.Link style={navcollapse} href="/failure">
              Failure
            </Nav.Link>
            <Nav.Link
              style={navcollapse}
              href="https://www.dbs.com.sg/personal/promotion/dbs-qr-gift"
            >
              DBS QR Gift
            </Nav.Link>
            <Nav.Link
              style={navcollapse}
              href="https://www.dbs.com.sg/personal/deposits/pay-with-ease/dbs-paylah"
            >
              DBS PayLah!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navibar;
