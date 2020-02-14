import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Shoplist from "../components/ShopList";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Form from "../components/Form";
import API from "../utils/API";

class Display extends Component {

  state = {
    showModalOne: false,
    showModalTwo: false,
    searchTerm: "",
    item: {

    }
  };

  displayModalOne = (event) => {
    event.preventDefault();
    this.setState({ showModalOne: true })

    console.log("showModalOne: " + this.state.showModalOne)
  };

  searchForItem = () => {
    console.log("searching for item");
  }

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

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });

    // console.log(this.state);
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="4">
            <Col size="2">
              <div class="align-content-ceneter">
                <Sidebar></Sidebar>
                <Button
                  click={this.displayModalTwo}
                  title="+ List"
                ></Button>
              </div>
            </Col>
            <Modal
              hideModal={this.hideModalTwo}
              showModalTwo={this.state.showModalTwo}
              title="What would you like to name your new list?"
              body={<Form></Form>}
              buttonOne="Save"
              buttonTwo="Cancel"
            ></Modal>
          </Col>
          <div className="col-8 align-content-center">
            <div className="col-9 mr-3 border border-dark rounded">
              <Row>
                <Shoplist></Shoplist>
              </Row>

              <Row>
                <div className="mr-2">
                  <Input
                    click={this.searchForItem}
                    handleInputChange={this.handleInputChange}
                    searchTerm={this.state.searchTerm}
                  ></Input>
                </div>
              </Row>

            </div>
            <Modal
              hideModal={this.hideModalOne}
              showModalOne={this.state.showModalOne}
              title="Is This What you Wanted?"
              body="Body One"
              buttonOne="Yes"
              buttonTwo="No"
            ></Modal>
          </div>
        </Row >
      </Container >
    );
  }
}

export default Display;