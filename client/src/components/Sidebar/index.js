import React from "react";
import "./style.css";

function Sidebar(prop) {
    return (
        <div className="col-9 justify-content-center">
            <div className="col-8 text-center d-flex justify-content-between">
                <table className="table table-hover table-sm m-7">
                    <thead>
                        <tr>
                            <th>Your Lists</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="list-name">
                            <td>Insert List Here</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sidebar;