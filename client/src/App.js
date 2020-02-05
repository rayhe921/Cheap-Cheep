import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Login from "./pages/login";


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar
          title="Cheap Cheep"
          image={logo}
          buttonName="Login"
        ></Navbar>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
