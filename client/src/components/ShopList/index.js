import React from "react";
import "./style.css";

function ShopList(prop) {
    return (
        <div>
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
                        <tr>
                            <th className="">
                                <button type="button" className=" btn-sm btn btn-outline-danger btn-dark">X</button>
                            </th>
                            <td>Toothbrush</td>
                            <td>$ 5.99</td>
                            <td>@Amazon</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShopList;