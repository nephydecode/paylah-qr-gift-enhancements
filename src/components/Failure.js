import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Failure.css";

class Failure extends Component {
  state = {};
  render() {
    return (
      <Container className="p-4">
        <Row>
          <Col className="p-4 mt-5">
            <img src="assets/failure.svg" />
          </Col>
        </Row>
        <Row>
          <Col className="header p-2">Oops.</Col>
        </Row>
        <Row>
          <Col className="text p-1">
            An error has occured. The <b>QR Gift (22jCoV)</b> has not been
            redeemed. Please scan again or <u>contact us</u>
            about the problem.
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Failure;
