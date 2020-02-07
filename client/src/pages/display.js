import React, { Component } from "react";
import Sidebar from "../components/Sidebar"
import Shoplist from "../components/ShopList";
import Input from "../components/Input"

class Display extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
        <Sidebar></Sidebar>
        </div>
        <div className="col-9">
        <Shoplist></Shoplist>
        <Input></Input>
        </div>
      </div>
    );
  }
}

export default Display;