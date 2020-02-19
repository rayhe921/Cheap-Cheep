import React from "react";
import "./style.css";

function Input(props) {
    return (
            <div className="col-12 pb-3 cork-board text-center d-flex justify-content-center">
                <form className="form-inline">
                    <input 
                    name="searchTerm"
                    placeholder="Add an item!" 
                    value={props.searchTerm}
                    onChange={props.handleInputChange}
                    className="form-control mr-sm-2"
                    type="text">
                    </input>
                    <button type="submit" className="btn btn-primary btn-outline-light align-self-center" onClick={props.clickWall}>Search Walmart</button>
                    <button type="submit" className="btn btn-success btn-outline-light align-self-center" onClick={props.clickCraigs}>Search Craigslist</button>
                </form>
            </div>
    )
}

export default Input;