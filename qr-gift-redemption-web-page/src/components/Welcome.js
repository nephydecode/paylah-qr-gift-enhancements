import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Welcome.css";
import decowhite from "../assets/deco-white.svg";
import decoblack from "../assets/deco-black.svg";
import shadow from "../assets/shadow.svg";
import largeqrgift from "../assets/largeqrgift.svg";
import whitearrow from "../assets/arrow-button.svg";
import BgImageDark from "./dark.svg";

var BgStyle = {
  backgroundImage: `url(${BgImageDark})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
  backgroundSize: "contain",
  backgroundColor: "#FA5A74"
};

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div
        style={BgStyle}
        className={"d-flex flex-column justify-content-center main-screen-size"}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className={"serialno text-white"}>22jCoV</div>
            </Col>
          </Row>
          <Row className="p-4 pt-5">
            <Col xs={12}>
              <div style={{ marginLeft: "-11em" }}>
                <img
                  src={decowhite}
                  style={{ position: "absolute" }}
                  className={"bobbingStars1"}
                />
                <img
                  src={decoblack}
                  style={{ position: "absolute" }}
                  className={"bobbingStars2"}
                />
              </div>

              <div>
                <img
                  src={largeqrgift}
                  style={{ position: "" }}
                  className={"bobbingUpDown"}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img src={shadow} className={"bobbingBigSmall"} />
            </Col>
          </Row>
          <Row className="m-3">
            <Col xs={12}>
              <h5 className={"header text-white"}>QR Gift</h5>
            </Col>
          </Row>
          <Row className="m-3">
            <Col xs={12}>
              <div className={"text text-white"}>
                You have received a <b>QR Gift (22jCoV)</b>! <br />
                Swipe down to redeem
              </div>
              <div className={"d-block p-1 mt-4"} />
            </Col>
          </Row>
          <Row className="p-4">
            <Col xs={12} />
          </Row>
        </Container>

        <div className={"d-flex justify-content-center"}>
          <a href="#redemption-options">
            <img
              src={whitearrow}
              className={"bobbingArrow"}
              style={{
                position: "absolute",
                marginLeft: "-1em",
                bottom: "1em"
              }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Welcome;
