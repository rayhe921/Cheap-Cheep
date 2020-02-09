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
        .then(res => this.setState({ Item: res.data }))

        .catch(err => console.log(err));
        console.log(res)

    };


    render() {
        console.log(this.state.Item);
        return(
            <main>
                <InfoCard Items={this.state.Item} />
            </main>
        );
    }
}

export default Saved;
