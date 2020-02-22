import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div class="card">
        <div>
          {props.children}
        </div>
      </div>
    )
}

export default Card;