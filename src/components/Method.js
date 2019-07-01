import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Method.css";

// const methodStyle = {
//     offset: '3',
//     border: '5px solid red',
// }

class Method extends Component {
  state = {};
  render() {
    return (
      <Container className="method-item mb-3 p-3">
        <Row>
          <Col
            xs={3}
            md={3}
            className={
              "p-0 d-flex flex-column flex-nowrap justify-content-center align-content-start"
            }
          >
            <div
              className={"p-4 rounded justify-content-center"}
              style={{ background: "#000" }}
            >
              <img src="assets/dbs-paylah.svg" className={""} />
            </div>
          </Col>
          <Col xs={9}>
            <Container>
              <Row>
                <Col style={{ textAlign: "left" }} className="text1">
                  DBS PayLah!
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: "left" }} className="text2">
                  Redeem your QR Gift with DBS PayLah! App.
                </Col>
              </Row>
              <Row>
                <Row className="button3 m-3 auto">
                  <Col
                    style={{ textAlign: "left" }}
                    className="text3 col-auto p-1"
                  >
                    Download PayLah!{" "}
                  </Col>{" "}
                  <Col className="arrow col-auto p-1">→</Col>
                </Row>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Method;
