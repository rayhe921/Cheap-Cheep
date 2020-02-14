import React from "react";
import API from "../../utils/API";
import "./style.css";
// import InfoCard from "../components/InfoCard"
// import Shoplist from "../components/ShopList";
import usersList from "../List";




function Sidebar(props) {

    // console.log(this.state.Lists);
    return (
      <div>
      <div className="col-9 justify-content-center">
        <div className="col-8 text-center d-flex justify-content-between">
          <table className="table table-lists table-hover table-sm m-7">
            <thead>
              <tr>
                <th>Your Lists</th>
              </tr>
            </thead>
            <tbody>
              {props.tbody}
            </tbody>
          </table>
        </div>

      </div>
    </div>
    )
  }


export default Sidebar;