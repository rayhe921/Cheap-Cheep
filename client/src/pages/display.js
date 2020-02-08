import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Shoplist from "../components/ShopList";
import Input from "../components/Input";
import Modal from "../components/Modal";

class Display extends Component {

  state = {
    showModal: false
  };

  displayModal = (event) => {
    event.preventDefault();
    this.setState({showModal: true})

     console.log("showModal: " + this.state.showModal)
  };

  hideModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
        <Sidebar></Sidebar>
        </div>
        <div className="col-9">
        <Shoplist></Shoplist>
        <Input
          click={this.displayModal}
        ></Input>
        <Modal
          hideModal={this.hideModal}
          showModal={this.state.showModal}
          title="Is This What you Wanted?"
          body="Body"
        ></Modal>
        </div>
      </div>
    );
  }
}

export default Display;