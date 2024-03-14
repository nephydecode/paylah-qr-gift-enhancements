import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Success.css";
import BgImageLight from "./light.svg";
import success from "../assets/success.svg";

var BgStyle = {
  backgroundImage: `url(${BgImageLight})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
  backgroundSize: "contain"
};

class Success extends Component {
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
              <img src={success} className={"paylahtick"} />
            </Col>
          </Row>
          <Row>
            <Col className="redemptionheader p-2">Successfully redeemed!</Col>
          </Row>
          <Row>
            <Col className="text pl-4 pr-4">
              The <b>QR Gift (22jCoV)</b> has been credited into your account.
            </Col>
          </Row>
          <Row>
            <Col className="dbslink p-1 mt-5">
              <u>Back to DBS QR Gift</u>
            </Col>
          </Row>
          <div className={"d-block p-1 mb-5"} />
        </Container>
      </div>
    );
  }
}

export default Success;
