import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cross from "../assets/cross.svg";
import oval from "../assets/oval.svg";
import lcloud from "../assets/envelope-left.svg";
import rcloud from "../assets/envelope-right.svg";
import flyplane from "../assets/flying-envel.svg";
import "./Sending.css";

class Sending extends Component {
  state = {};
  render() {
    return (
      <div
        className={"d-flex flex-column justify-content-center main-screen-size"}
      >
        <Container className="">
          <Row>
            <Col>
              <img
                src={lcloud}
                style={{ position: "absolute", zIndex: 999, marginTop: "-32%" }}
                className="toprow"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <img src={cross} style={{ position: "absolute", zIndex: 999 }} />
            </Col>
          </Row>
          <Row>
            <Col xs={11} className="mt-2" />
          </Row>
          <Row>
            <Col xs={9}>
              <div
                className="dot d-flex justify-content-center"
                style={{
                  position: "absolute",
                  left: "32.25%",
                  marginTop: "-25.5%"
                }}
              >
                <div
                  className="dot2"
                  style={{
                    position: "absolute",
                    left: "25%",
                    marginTop: "25%"
                  }}
                >
                  <img
                    src={flyplane}
                    style={{
                      position: "absolute",
                      zIndex: 999,
                      left: "-2.5%",
                      marginTop: "20%"
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <img src={oval} style={{ position: "absolute", zIndex: 999 }} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img
                src={rcloud}
                className="mt-5"
                style={{ position: "absolute" }}
              />
              <div className={"d-block pb-5 mb-5-5"} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sending;
