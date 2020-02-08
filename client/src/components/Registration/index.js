import React, { Component } from "react";
import "./style.css";
// import Form from "../Form";
import API from "../../utils/API";
// import { Link } from "react-router-dom";


class Registration extends Component {

    // Setting the component's initial state
    state = {
        username: " ",
        password: "",
        email: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

            if (this.state.username && this.state.password && this.state.email)  {
              API.saveUser({
                userName: this.state.username,
                password: this.state.password,
                email : this.state.email
               
              })
                .then(res => this.loadUsers())
                .catch(err => console.log(err));

                console.log("this is working")

                
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello!! your have created an account with us. ${this.state.username} ${this.state.password} ${this.state.email}`);
        this.setState({
            firstName: "",
            lastName: ""
        })
    }
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="col-6 card">
                <h2 className="text-center">Sign Up Here</h2>
                <h5 className="text-center">It's quick and easy</h5>
                <hr />

                {/* <p>
                    Hello {this.state.username} {this.state.password}
                    {this.state.email}
                </p> */}
                <form className="form">
                    <div>
                        <div className="form-group col-md-6">
                            <label for="username">Username</label>
                            <input
                                value={this.state.username}
                                name="username"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder=""
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input
                                value={this.state.password}
                                name="password"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder=" "
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputemail">Email</label>
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder=""
                            className="form-control"
                        />
                    </div>





                    <button class="btn btn-primary col align-self-center" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Registration;
