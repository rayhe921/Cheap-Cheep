import React, { Component } from "react";
import Button from "../components/Button";
import API from "../utils/API";
import Modal from "../components/Modal"


class Main extends Component {

  state={
    username: "",
    password: ""
  };

   // Handles updating component state when the user types into the input field
   handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.saveUser({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <Button
        dataToggle="modal"
        dataTargetID="#example-modal"
        title="Modal Test Button"
      ></Button>
      <Modal></Modal>

      </div>
    );
  }
}

export default Main;
