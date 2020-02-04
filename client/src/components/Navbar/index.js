import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img src={props.image} width="100" height="100" alt="logo" />
      </a>
      <span class="navbar-text">
        {props.title}
      </span>
    </nav>
  )
}

export default Navbar;

