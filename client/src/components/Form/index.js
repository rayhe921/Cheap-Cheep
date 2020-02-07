import React from "react";
import "./style.css";

function Form(prop) {
    return (
        <div className="form-group col-md-6">
            <label for={prop.idName}>{prop.name}</label>
            <input type={prop.type} placeholder={prop.placeholder} 
            className="form-control" id={prop.idName} value={prop.value} />
        </div>
    )
}

export default Form;