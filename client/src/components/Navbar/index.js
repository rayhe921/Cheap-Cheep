import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={props.image} width="100" height="100" alt="logo" />
      </a>
      <span className="navbar-text text-center">
        <h1>
          {props.title}
        </h1>
      </span>
      <div className="form-group">
        <form className="form-inline">
          <input id="username" className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" />
          <input id="password" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
        </form>
        <div>
          <button id="login-button" className="btn btn-outline-success my-2" type="submit">{props.buttonName}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

