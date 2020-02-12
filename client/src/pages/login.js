import React, { Component } from "react";
import Registration from "../components/Registration";
import InfoCard from "../components/InfoCard";
import {Container, Row, Col} from "../components/Grid";

// import Saved from "../pages/Saved"
// import List from "../pages/list"

class Login extends Component {


  // Handles updating component state when the user types into the input field




  render() {
    return (
      <Container>
        <Row>
          <Col size="6">
          <InfoCard
            listOne="Easy"
            listTwo="Organized"
            listThree="Cheap on your budget"
          ></InfoCard>
          </Col>
          <Col size="6">
          <Registration
            onClick={this.handleFormSubmit}
            
          ></Registration>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
