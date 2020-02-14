import React from "react";
import "./style.css";

function usersList(prop) {
    return (
        <tr>
            <td>{prop.listName}</td>
        </tr>
    )
}

export default usersList;