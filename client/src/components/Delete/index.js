import React from "react";
import "./style.css";

function Delete (props) {
    return (
        <td> 
            <button onClick={props.buttonClick} type="button" id={props.id} className="btn-sm btn btn-outline-danger btn-dark">X</button>
        </td>
    )
}

export default Delete ;