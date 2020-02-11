import React from "react";
import "./style.css";

function Navbar(props) {
  const showLogout = props.showLogin ? "form-group" : "form-group display-none";
  const hideLogoutButton = props.hideLogoutButton ? "display-none" : "display-block";
  return (
    <nav className="navbar navbar-light bg-light height">
      <div className="row">
      <a className="navbar-brand col-sm-3" href="/">
        <img src={props.image} width="100" height="100" alt="logo" />
      </a>
        <h1 className="col-sm-8 text-center navbar-text">
          Cheap Cheep
        </h1>
<<<<<<< HEAD
      </div>
      <div className="form-group row">
        <form className="form-inline">
          <input id="username" className="form-control mr-sm-2 col-sm-4" type="username" placeholder="Username" aria-label="Username" />
          <input id="password" className="form-control mr-sm-2 col-sm-3" type="password" placeholder="Password" aria-label="Password" />

          <button id="login-button" className="btn btn-outline-success my-2" type="submit">{props.buttonName}</button>
        </form>
=======
      </span>
      <div className={showLogout}>
        <form className="form-inline">
          <input id="username" className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" />
          <input id="password" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
        </form>
        <div>
          <button id="login-button" onClick={props.onClick} className="btn btn-outline-success my-2" type="submit">{props.buttonName}</button>
        </div>
>>>>>>> 4896594b57dfe1734648ca99bd9b54683a85158a
      </div>
      <div className={hideLogoutButton}>
      <button onClick={props.onClickLogout} className="btn btn-outline-success my-2" type="submit">{props.buttonNameTwo}</button>
      </div>
    </nav>
  )
}

export default Navbar;

