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
    console.log(this.state.Lists);
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
              <tr Lists={this.state.Lists} >
                {this.state.Lists.map(List => (
                  <tbody key={List._id}>
                    <tr>
                      <td>{List.listName}</td>
                    </tr>
                  </tbody>
                ))}

              </tr>
            </tbody>
          </table>
        </div>

      </div>
      {/* <div className="col-8 text-center d-flex justify-content-center">
        <form>
          <button type="submit" className="btn btn-primary col align-self-center">Add List</button>
        </form>
      </div> */}
    </div>
    )
  }
}

export default Saved;