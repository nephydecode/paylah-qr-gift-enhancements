import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Failure.css";
import BgImage from "./light.svg";
import failure from "../assets/failure.svg";

var BgStyle = {
  backgroundImage: `url(${BgImage})`
};

class Failure extends Component {
  state = {};
  render() {
    return (
      <div style={BgStyle} className="img-fluid">
        <Container className="p-4">
          <Row className="pt-5">
            <Col xs={12}>
              <div className={"serialno"}>22jCoV</div>
            </Col>
          </Row>
          <Row>
            <Col className="p-4 mt-2">
              <img src={failure} />
            </Col>
          </Row>
          <Row>
            <Col className="header p-2">Oops.</Col>
          </Row>
          <Row>
            <Col className="text p-1">
              An error has occured. The <b>QR Gift (22jCoV)</b> has not been
              redeemed. Please scan again or <u>contact us</u> about the
              problem.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Failure;
