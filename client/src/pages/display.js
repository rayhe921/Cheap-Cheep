import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Shoplist from "../components/ShopList";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Form from "../components/Form";
import API from "../utils/API";
import UsersList from "../components/List"

class Display extends Component {

  state = {
    showModalOne: false,
    showModalTwo: false,
    searchTerm: "",
    item: {},
    lists: [],
    listInputText: ""
  };

  displayModalOne = (event) => {
    event.preventDefault();
    this.setState({ showModalOne: true })

    console.log("showModalOne: " + this.state.showModalOne)
  };

  searchForItem = (event) => {
    event.preventDefault();
    console.log("searching for item");

    API.scrapeWalmart(this.state.searchTerm).then(function (response) {
      console.log(response);
    })
      .catch(err => console.log(err));
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

  submitListModal = (event) => {
    const handleListInsert = (listOb) => {
      this.state.lists.push(listOb);
      console.log("this.state.lists: " + JSON.stringify(this.state.lists))
      this.setState({ listInputText: "" })
    }
    event.preventDefault();
    API.saveList({
      listName: this.state.listInputText
    }).then(function (response) {
      console.log("response " + JSON.stringify(response))
      const newList = {
        listName: response.data.listName,
        id: response.data._id
      }
      handleListInsert(newList)
      console.log("newList: " + JSON.stringify(newList))
    })
    this.setState({ showModalTwo: false })
    console.log("this.state.listInputText: " + this.state.listInputText)
    console.log("this.state.lists: " + JSON.stringify(this.state.lists))
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

  clickList = event => {
    event.preventDefault();
    console.log("Hello World")
  }


  render() {
    return (
      <Container items="floatie">
        <Row>
          <Col size="3">
            <Sidebar>
              {this.state.lists.map(listOb => (
                <UsersList
                  name={listOb.listName}
                  id={listOb.id}
                  key={listOb.id}
                  buttonClick={this.clickList}
                ></UsersList>
              ))}
            </Sidebar>
            <Button
              click={this.displayModalTwo}
              title="Add a List"
            ></Button>
            <Modal
              hideModal={this.hideModalTwo}
              showModalTwo={this.state.showModalTwo}
              title="What would you like to name your new list?"
              body={<Form
                name="listInputText"
                onChange={this.handleInputChange}
                value={this.state.listInputText}
              ></Form>}
              buttonOne="Save"
              buttonTwo="Cancel"
              submit={this.submitListModal}
            ></Modal>
          </Col>
          <Col size="8">

            <Shoplist></Shoplist>

            <div className="row d-flex justifiy-content-center">
              <Input
                click={this.searchForItem}
                handleInputChange={this.handleInputChange}
                searchTerm={this.state.searchTerm}
              ></Input>

            </div>
          </Col>
          <Modal
            hideModal={this.hideModalOne}
            showModalOne={this.state.showModalOne}
            title="Is This What you Wanted?"
            body="Body One"
            buttonOne="Yes"
            buttonTwo="No"
          ></Modal>
        </Row >
      </Container >
    );
  }
}


export default Display;