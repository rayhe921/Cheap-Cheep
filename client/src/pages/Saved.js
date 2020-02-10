import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import InfoCard from "../components/InfoCard"



class Saved extends Component {
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
      <main>
        <InfoCard Items={this.state.Item} />
        {this.state.Items.map(Item => (
          <ul>
            <li>
              <p key={Item._id}>
                <strong>
                  {Item.name} {Item.price} {Item.website} {Item.seacrhTerm}
                </strong>
              </p>
            </li>
          </ul>

        ))}

      </main>
    );
  }
}

export default Saved;
