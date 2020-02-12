import React from "react";
import "./style.css";
import List from "../List";

function ShopList(prop) {
    return (
        <div>
            <div className="row">
                <h3>{prop.title}</h3>
                <div className="list-button">
                    <button type="button" className="btn-sm btn btn-outline-danger btn-dark">X</button>
                </div>
            </div>
            <div className="col-8 text-center d-flex justify-content-between">
                <table className="table table-bordered table-hover table-sm m-7">
                    <thead>
                        <tr>
                            <th>Remove</th>
                            <th>Item Name</th>
                            <th>Lowest Price</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <List

                        ></List>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShopList;