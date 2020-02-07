import React, { Component } from "react";
import "./style.css";
import Form from "../Form";

class Registration extends Component{

    state={
        username: "",
        password: ""
    }
    render (){
        return(
        <div className="col-6 card">
            <h2 className="text-center">Sign Up Here</h2>
            <h5 className="text-center">It's quick and easy</h5>
            <hr />
            <form>
                <Form
                    idName="username"
                    name="Username"
                    type="text"
                    placeholder="New Username Here"
                    value={this.state.username}
                ></Form>
                <Form
                    idName="password"
                    name="Password"
                    type="password"
                    placeholder="New Password Here"
                    value={this.state.password}
                ></Form>
                <Form
                    idName="email"
                    name="Email Address"
                    type="email"
                    placeholder="email@email.com"
                ></Form>
                <button type="submit" class="btn btn-primary col align-self-center">Sign in</button>
            </form>
        </div>
        )}
}

export default Registration;