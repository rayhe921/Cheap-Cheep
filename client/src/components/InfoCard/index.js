import React from "react";
import "./style.css";
import {Contrainer, Row, Col} from "../Grid"

function InfoCard(prop) {
    return (
        <div className="col-6 card rounded-circle">
            <h1>Makes Shopping</h1>
            <hr />
            <ul class="list">
                <li>{prop.listOne}</li>
                <li>{prop.listTwo}</li>
                <li>{prop.listThree}</li>
            </ul>
        </div>
    )
}

export default InfoCard;