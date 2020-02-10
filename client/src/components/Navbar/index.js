import React from "react";
import "./style.css";

function Navbar(props) {
  const showLogout = props.showLogin ? "form-group" : "form-group display-none";
  const showLogoutButton = props.showLogoutButton ? "display-block" : "display-none"
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
      <div className={showLogout}>
        <form className="form-inline form-control-sm mr-3 w-15">
          <input id="username" className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" />
          <input id="password" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
        </form>
        <div>
          <button id="login-button" onClick={props.onClick} className="btn btn-outline-success my-2" type="submit">{props.buttonName}</button>
        </div>
      </div>
      <div className={showLogoutButton}>
      <button onClick={props.onClickLogout} className="btn btn-outline-success my-2" type="submit">{props.buttonNameTwo}</button>
      </div>
    </nav>
  )
}

export default Navbar;

