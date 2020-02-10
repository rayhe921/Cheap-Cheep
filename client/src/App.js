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
    showLoginButton: false
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.setState({ showLoginButton: true})
    // this.setState({ showLoginButton: true })
    console.log("showLoginButton: " + this.state.showLoginButton)
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
          showLoginButton={this.state.showLoginButton}
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
