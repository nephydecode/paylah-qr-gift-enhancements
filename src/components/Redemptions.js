import React, { Component } from "react";
import Method from "./Method";
import { Container } from "react-bootstrap";
import paylah from "../assets/dbs-paylah.svg";
import digibank from "../assets/digibank.svg";
import paynow from "../assets/paynow-white.svg";
import singpass from "../assets/singpass.svg";

class Redemptions extends Component {
  state = {};
  render() {
    return (
      <Container className={"p-4"}>
        <Method
          highlighted
          link={"/dey"}
          title={"DBS PayLah!"}
          helperText={"Redeem your QR Gift with DBS PayLah! App"}
          actionText={"Download PayLah!"}
          image={paylah}
          methodbgcolor="#000"
        />
        <Method
          link={"/dey"}
          title={"DBS Digibank"}
          helperText={"Login to Digibank to redeem your QR Gift!"}
          actionText={"Login to Digibank"}
          image={digibank}
          methodbgcolor="#000"
        />
        <Method
          link={"/dey"}
          title={
            <>
              PayNow via <img src={singpass} />
            </>
          }
          helperText={
            "Login to SingPass to verify your NRIC to redeem your QR Gift!"
          }
          actionText={"Login to SingPass"}
          image={paynow}
          methodbgcolor="linear-gradient(to right, #EC3E6B, #9D298C)"
        />
      </Container>
    );
  }
}

export default Redemptions;
