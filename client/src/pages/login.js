import React, { Component } from "react";
import Registration from "../components/Registration";
import InfoCard from "../components/InfoCard";


class Login extends Component {


  // Handles updating component state when the user types into the input field




  render() {
    return (
      <div className="container">
        <div className="row">
          <InfoCard
            listOne="Easy"
            listTwo="Organized"
            listThree="Cheap on your budget"
          ></InfoCard>
          <Registration
            // <Link to={"/books/" + book._id}>

            onClick={this.handleFormSubmit}
          ></Registration>
        </div>
      </div>
    );
  }
}

export default Login;
