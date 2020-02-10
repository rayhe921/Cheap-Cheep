import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Shoplist from "../components/ShopList";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button"

class Display extends Component {

  state = {
    showModalOne: false,
    showModalTwo: false
  };

  displayModalOne = (event) => {
    event.preventDefault();
    this.setState({ showModalOne: true })

    console.log("showModalOne: " + this.state.showModalOne)
  };

  hideModalOne = () => {
    this.setState({ showModalOne: false })
  }

  displayModalTwo = (event) => {
    event.preventDefault();
    this.setState({ showModalTwo: true })

    console.log("showModalTwo: " + this.state.showModalTwo)
  };

  hideModalTwo = () => {
    this.setState({ showModalTwo: false })
  }


  render() {
    return (
      <Container>
        <Row>
          <Col size="3">
            <Sidebar></Sidebar>
            <Button
              click={this.displayModalTwo}
              title="Add a List"
            ></Button>
            <Modal
              hideModal={this.hideModalTwo}
              showModalTwo={this.state.showModalTwo}
              title="Is This What you Wanted?"
              body="Body Two"
            ></Modal>
          </Col>
          <Col size="9">
            <Shoplist></Shoplist>
            <Input
              click={this.displayModal}
            ></Input>
            <Modal
              hideModal={this.hideModal}
              showModal={this.state.showModal}
              title="Is This What you Wanted?"
              body="Body"
            ></Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Display;