import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Success.css";
import BgImage from "./light.svg";
import success from "../assets/success.svg";

var BgStyle = {
  backgroundImage: `url(${BgImage})`
};

class Success extends Component {
  state = {};
  render() {
    return (
      <div style={BgStyle} className="img-fluid">
        <Container className="p-4">
          <Row>
            <Col className="p-4 mt-5">
              <img src={success} />
            </Col>
          </Row>
          <Row>
            <Col className="header p-2">Your redemption is successful.</Col>
          </Row>
          <Row>
            <Col className="text p-1">
              The redemption of <b>QR Gift (22jCoV)</b> is successful! Please{" "}
              <u>contact us</u>
              if you run into any trouble.
            </Col>
          </Row>
          <Row>
            <Col className="dbslink p-1">
              <u>Back to DBS QR Gift</u>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Success;
