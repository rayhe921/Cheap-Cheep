import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Login from "./pages/login";
import Saved from "./pages/Saved";


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
          <Route path="/saved" component={Saved}/>
        </Switch>
        <Saved />

      </Router>
    );
  }
}

export default App;
