import React from "react";
import "./style.css";

function List(prop) {
    return (
        <tr>
            <th className="">
                <button type="button" className=" btn-sm btn btn-outline-danger btn-dark">X</button>
            </th>
            <td>{prop.itemName}</td>
            <td>{prop.itemPrice}</td>
            <td>{prop.itemLink}</td>
        </tr>
    )
}

export default List;