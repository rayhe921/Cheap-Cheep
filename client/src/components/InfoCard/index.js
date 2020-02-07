import React from "react";
import "./style.css";

function InfoCard(prop) {
    return (
        <div className="col-6 infoCard">
            <h1>Makes Shopping</h1>
            <ul class="list">
                <li>{prop.listOne}</li>
                <li>{prop.listTwo}</li>
                <li>{prop.listThree}</li>
            </ul>
        </div>
    )
}

export default InfoCard;