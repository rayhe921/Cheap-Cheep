import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light height">
      <div className="row">
      <a className="navbar-brand col-sm-3" href="/">
        <img src={props.image} width="100" height="100" alt="logo" />
      </a>
        <h1 className="col-sm-8 text-center navbar-text">
          Cheap Cheep
        </h1>
      </div>
      <div className="form-group row">
        <form className="form-inline">
          <input id="username" className="form-control mr-sm-2 col-sm-4" type="username" placeholder="Username" aria-label="Username" />
          <input id="password" className="form-control mr-sm-2 col-sm-3" type="password" placeholder="Password" aria-label="Password" />

          <button id="login-button" className="btn btn-outline-success my-2" type="submit">{props.buttonName}</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar;

