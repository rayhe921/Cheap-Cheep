import React, { Component } from "react";
import Registration from "../components/Registration";
import API from "../utils/API"





class Login extends Component {
  state = {
    username: " ",
    password: "",
    email: ""
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ Users: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (



      <Registration>

      </Registration>
    )
  }
}

export default Login;
