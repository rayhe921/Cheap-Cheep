import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";



class Navbar extends Component {

  state = {
    loginName: "",
    loginPass: "",
};

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;

  // Updating the input's state
  this.setState({
      [name]: value
  });

  // console.log(this.state);
};

handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();

  if (this.state.loginName && this.state.loginPass) {
      API.login({
          userName: this.state.loginName,
          password: this.state.loginPass,

      }).then( function(response) {
        console.log(response);
      })
          .catch(err => console.log(err));

      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  }
};

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="img" width="100" height="100" alt="logo" />
        </a>
        <span className="navbar-text text-center">
          <h1>
            {/* {props.title} */}
            Title
          </h1>
        </span>
        <div className="form-group">
          <form className="form-inline">
            <input 
            name="loginName" 
            value={this.state.loginName}
            onChange={this.handleInputChange}
            className="form-control mr-sm-2" 
            type="username" 
            placeholder="Username" 
            aria-label="Username" />
            <input 
            name="loginPass" 
            value={this.state.loginPass}
            onChange={this.handleInputChange}
            className="form-control mr-sm-2" 
            type="password" 
            placeholder="Password" 
            aria-label="Password" />
          </form>
          <div>
            <button id="login-button" onClick={this.handleFormSubmit} className="btn btn-outline-success my-2" type="submit">login</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
