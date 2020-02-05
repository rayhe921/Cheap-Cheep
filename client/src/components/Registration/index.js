import React from "react";
import "./style.css";

function Registration(prop) {
    return (
        <div className="col-6 card">
            <h2 className="text-center">Sign Up Here</h2>
            <h5 className="text-center">It's quick and easy</h5>
            <hr />
            <form>
                <div>
                    <div className="form-group col-md-6">
                        <label for="username">Username</label>
                        <input type="text" placeholder="New Username Here" className="form-control" id="username" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" placeholder=" New Password Here" className="form-control" id="inputPassword4" />
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputEmail">E-Mail Address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="email@email.com" />
                </div>
                <button type="submit" class="btn btn-primary col align-self-center">Sign in</button>
            </form>
        </div>
    )
}

export default Registration;