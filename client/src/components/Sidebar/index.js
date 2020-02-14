import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
// import InfoCard from "../components/InfoCard"
// import Shoplist from "../components/ShopList";




class Saved extends Component {
  state = {
    Lists: []
  };

  componentDidMount() {
    this.loadlist();
  }

  loadlist = () => {
    API.getList()
      .then(res => this.setState({ Lists: res.data }))

      .catch(err => console.log(err));

  };


  render() {
    // console.log(this.state.Lists);
    return (
      <div className="">
          <table className="table table-lists table-hover table-sm m-7">
            <thead>
              <tr>
                <th>Your Lists</th>
              </tr>
            </thead>
            <tbody Lists={this.state.Lists} >
                {this.state.Lists.map(List => (
                  <tr key={List._id}>
                      <td>{List.listName}</td>
                  </tr>
                ))}
            </tbody>
          </table>
      </div>
      
    )
  }
}

export default Saved;