import React from "react";
import "./style.css";

function Button(prop) {
    return (
        <div className="align-content-center">
            <button type="button" className="btn btn-primary" onClick={prop.click} data-toggle={prop.dataToggle} data-target={prop.dataTargetID}>{prop.title}</button>
        </div>
    )
}

export default Button;