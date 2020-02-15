import React from "react";
import "./style.css";


function InfoCard(prop) {
    return (
        <div className="card">
            <h2 className="font-weight-bold"><u>Makes Shopping</u></h2>
            <ul className="list">
                <li className="mt-3">{prop.listOne}</li>
                <li>{prop.listTwo}</li>
                <li>{prop.listThree}</li>
            </ul>
        </div>
    )
}

export default InfoCard;