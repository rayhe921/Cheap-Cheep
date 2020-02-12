import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";




class ShopList extends Component {
  state = {
    Items: []
  };

  componentDidMount() {
    this.loaditem();
  }

  loaditem = () => {
    API.getItem()
      .then(res => this.setState({ Items: res.data }))

      .catch(err => console.log(err));

  };


  render() {
    console.log(this.state.Items);
    return (
      <div className="col-8 text-center d-flex justify-content-between">
        <table className="table table-bordered table-hover table-sm m-7">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Item Name</th>
              <th>Lowest Price</th>
              <th>Link</th>
              <th>search Term</th>

            </tr>
          </thead>
          <tbody>
            <tr Items={this.state.Item} >
              {this.state.Items.map(Item => (
                <tbody key={Item._id}>
                  <tr>
                    <th className="">
                      <button type="button" className=" btn-sm btn btn-outline-danger btn-dark">X</button>
                    </th>
                    <td>{Item.name}</td>
                    <td>{Item.price}</td>
                    <td>{Item.website}</td>
                    <td>{Item.seacrhTerm}</td>
                  </tr>
                </tbody>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShopList;