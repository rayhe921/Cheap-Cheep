import React from "react";
import "./style.css";

function usersList(props) {
    return (
        <tr>
            <td onClick={props.buttonClick} id={props.id}>
                {props.name}
                </td>
        </tr>
    )
}

export default usersList;