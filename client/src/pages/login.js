import React, { Component } from "react";
import Registration from "../components/Registration";
import InfoCard from "../components/InfoCard";
import API from "../utils/API";


class Login extends Component {

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
      <InfoCard
        listOne="Easy"
        listTwo="Organized"
        listThree="Cheap on your budget"
      ></InfoCard>
      <Registration
         onClick={this.handleFormSubmit}
      ></Registration>
      </div>
    );
  }
}

export default Login;
