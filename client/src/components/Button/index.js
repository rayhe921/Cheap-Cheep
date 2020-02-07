import React from "react";
import "./style.css";

function Button(prop) {
    return (
    <button type="button" class="btn btn-primary" data-toggle={prop.dataToggle} data-target={prop.dataTargetID}>{prop.title}</button>
    )
}

export default Button;