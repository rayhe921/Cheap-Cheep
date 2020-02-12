import React from "react";
import "./style.css";

function Form(prop) {
    return (
        <div>
            <label htmlFor={prop.idName}>{prop.name}</label>
            <input type={prop.type} placeholder={prop.placeholder} 
            className="form-control" id={prop.idName} value={prop.value} />
        </div>
    )
}

export default Form;