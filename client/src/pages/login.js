import React, { Component } from "react";
import Registration from "../components/Registration";
import InfoCard from "../components/InfoCard";
import API from "../utils/API"


class Login extends Component {

  saveUser = () => {

  }
  render() {
    return (
      <div>
      <InfoCard
        listOne="Easy"
        listTwo="Organized"
        listThree="Cheap on your budget"
      ></InfoCard>
      <Registration></Registration>
      </div>
    );
  }
}

export default Login;
