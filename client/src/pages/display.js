import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Shoplist from "../components/ShopList";
import Input from "../components/Input";
import Modal from "../components/Modal";

class Display extends Component {

  state = {
    showModalOne: false,
    showModalTwo: false
  };

  displayModalOne = (event) => {
    event.preventDefault();
    this.setState({ showModalOne: true })

    console.log("showModalOne: " + this.state.showModalOne)
  };

  hideModalOne = () => {
    this.setState({ showModalOne: false })
  }

  displayModalTwo = (event) => {
    event.preventDefault();
    this.setState({ showModalTwo: true })

    console.log("showModalTwo: " + this.state.showModalTwo)
  };

  hideModalTwo = () => {
    this.setState({ showModalTwo: false })
  }


  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Sidebar></Sidebar>
          <Input
            click={this.displayModalTwo}
          ></Input>
          <Modal
            hideModal={this.hideModalTwo}
            showModalTwo={this.state.showModalTwo}
            title="Is This What you Wanted?"
            body="Body Two"
          ></Modal>
        </div>
        <Shoplist></Shoplist>
        <Input
          click={this.displayModalOne}
        ></Input>
        <Modal
          hideModal={this.hideModalOne}
          showModalOne={this.state.showModalOne}
          title="Is This What you Wanted?"
          body="Body One"
        ></Modal>

      </div>
    );
  }
}

export default Display;