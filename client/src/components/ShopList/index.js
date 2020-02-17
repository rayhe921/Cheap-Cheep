import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import Delete from "../Delete"
// import List from "../List";




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

    delete = event => {
      event.preventDefault();
      console.log("Delete Item")
    }


  render() {
    // console.log(this.state.Items);
    return (
        <div className="row mt-4 text-center d-flex justify-content-between">
          <table className="m-4 table table-light items items-table table-bordered table-hover table-sm m-7">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Item Name</th>
                <th>Lowest Price</th>
                <th>Link</th>
                <th>Search Term</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Items.map(Item => (
                <tr className="table-success" key={Item._id}>
                  <Delete 
                  id={Item.id}
                  buttonClick={this.delete}
                  ></Delete>
                  <td>{Item.name}</td>
                  <td>{Item.price}</td>
                  <td>{Item.website}</td>
                  <td>{Item.seacrhTerm}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
    );
  }
}

export default ShopList;