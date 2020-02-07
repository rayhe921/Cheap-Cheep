import React from "react";
import "./style.css";

function Input(prop) {
    return (
            <div className="col-8 text-center d-flex justify-content-center">
                <form>
                    <input placeholder="Add an item!"></input>
                    <button type="submit" class="btn btn-primary col align-self-center">Add Item</button>
                </form>
            </div>
    )
}

export default Input;