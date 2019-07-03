import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Failure.css";
import BgImageLight from "./light.svg";
import failure from "../assets/failure.svg";

var BgStyle = {
  backgroundImage: `url(${BgImageLight})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
  backgroundSize: "contain"
};

class Failure extends Component {
  state = {};
  render() {
    return (
      <div
        style={BgStyle}
        className={"d-flex flex-column justify-content-center main-screen-size"}
      >
        <Container className="p-4">
          <Row className="pt-5">
            <Col xs={12}>
              <div className={"serialno"}>22jCoV</div>
            </Col>
          </Row>
          <Row>
            <Col className="p-4 mt-2">
              <img src={failure} className={"paylahfail"} />
            </Col>
          </Row>
          <Row>
            <Col className="redemptionheader p-2">Oops.</Col>
          </Row>
          <Row>
            <Col className="text pl-3 pr-3">
              We were unable to complete the redemption of{" "}
              <b>QR Gift (22jCoV)</b>. Please scan again or <u>contact us</u>{" "}
              about the problem.
            </Col>
          </Row>
          <div className={"d-block p-1 mb-5"} />
        </Container>
      </div>
    );
  }
}

export default Failure;
