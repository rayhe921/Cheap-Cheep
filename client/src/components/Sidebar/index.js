import React from "react";
import API from "../../utils/API";
import "./style.css";
// import InfoCard from "../components/InfoCard"
// import Shoplist from "../components/ShopList";
import usersList from "../List";




function Sidebar(props) {

    // console.log(this.state.Lists);
    return (
          <table className="table table-success table-lists table-hover table-sm">
            <thead>
              <tr className="table-light">
                <th>Your Lists</th>
              </tr>
            </thead>
            <tbody>
              {props.tbody}
            </tbody>
          </table>
    )
  }


export default Sidebar;