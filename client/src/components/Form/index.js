import React from "react";
import "./style.css";

function Form(prop) {
    return (
        <div>
            <label htmlFor={prop.idName}></label>
            <input type={prop.type} name={prop.name} onChange={prop.onChange} placeholder={prop.placeholder} 
            className="form-control" id={prop.idName} value={prop.value} />
        </div>
    )
}

export default Form;