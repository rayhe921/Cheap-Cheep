import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Display from "./pages/display"
import Login from "./pages/login";




class App extends Component {

  state = {
    showLogin: true,
    hideLoginButton: true
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.setState({ hideLoginButton: false, showLogin: false })
    console.log("hideLoginButton: " + this.state.hideLoginButton)
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({ hideLoginButton: true, showLogin: true })
    console.log("hideLoginButton: " + this.state.hideLoginButton)
  }

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
          hideLoginButton={this.state.hideLoginButton}
          onClickLogout={this.handleLogout}
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
