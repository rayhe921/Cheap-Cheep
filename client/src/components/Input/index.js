import React from "react";
import "./style.css";

function Input(props) {
    return (
            <div className="col-8 text-center d-flex justify-content-center">
                <form className="form-inline">
                    <input 
                    name="searchTerm"
                    placeholder="Add an item!" 
                    value={props.searchTerm}
                    onChange={props.handleInputChange}
                    className="form-control mr-sm-2"
                    type="text"></input>
                    <button type="submit" className="btn btn-primary col align-self-center" onClick={props.click}>Add Item</button>
                </form>
            </div>
    )
}

export default Input;