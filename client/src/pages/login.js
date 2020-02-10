import React, { Component } from "react";
import Registration from "../components/Registration";
import InfoCard from "../components/InfoCard";
import Saved from "../pages/Saved"
// import List from "../pages/list"

class Login extends Component {


  // Handles updating component state when the user types into the input field




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
        <Saved />
      </div>
    );
  }
}

export default Login;
