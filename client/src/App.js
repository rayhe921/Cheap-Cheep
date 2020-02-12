import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Display from "./pages/display"
import Login from "./pages/login";
import API from "./utils/API";





class App extends Component {

  state = {
    showLogin: true,
    hideLogoutButton: true,
    loginName: "",
    loginPass: ""
  }

  // handleLogin = (event) => {
  //   event.preventDefault();
  //   this.setState({ hideLogoutButton: false, showLogin: false })
  //   console.log("hideLogoutButton: " + this.state.hideLogoutButton)
  // }

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({ hideLogoutButton: true, showLogin: true })
    console.log("hideLogoutButton: " + this.state.hideLogoutButton)
  }

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("hello.");
  
    if (this.state.loginName && this.state.loginPass) {
        API.login({
            userName: this.state.loginName,
            password: this.state.loginPass,
  
        }).then( function(response) {
          console.log(response);
  
          if (response.data.found === false){
            console.log("User not found.")
          } else if (response.data.userID === -1){
            console.log("Password is incorrect");
          } else {
             localStorage.setItem("id", response.data.userID);
             window.location.href = "/main";
          }
        })
            .catch(err => console.log(err));  
  
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    }
  };
  
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
      <Router>
        <Navbar
          title="Cheap Cheep"
          image={logo}
          buttonName="Login"
          buttonNameTwo="Logout"
          onClick={this.handleLogin}
          showLogin={this.state.showLogin}
          hideLogoutButton={this.state.hideLogoutButton}
          onClickLogout={this.handleLogout}
          loginNameValue={this.state.loginName}
          handleInputChange={this.handleInputChange}
          passwordValue = {this.state.passwordValue}
        ></Navbar>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Display} />

        </Switch>

      </Router>
    );
  }
}

export default App;
