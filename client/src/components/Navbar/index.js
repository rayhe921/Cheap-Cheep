import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-light bg-primary">
  <a className="navbar-brand" href="/">{props.children}</a>
  <span className="navbar-text">
    {props.navText}
  </span>
  <span className="navbar-text">
    Score: {props.score} / Top Score: {props.highScore}  
  </span>
</nav>
    )
}

export default Navbar;

