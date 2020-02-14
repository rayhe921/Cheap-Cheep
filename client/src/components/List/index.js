import React from "react";
import "./style.css";

function usersList(props) {
    return (
        <tr>
            <td onClick={props.buttonClick} key={props.key} id={props.id}>
                {props.name}
                </td>
        </tr>
    )
}

export default usersList;