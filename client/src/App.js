import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/Navbar";


class App extends Component {
  render() {
    return (
      <Navbar
      title="Cheap Cheep"
      image={logo}
      ></Navbar>
    );
  }
}

export default App;
