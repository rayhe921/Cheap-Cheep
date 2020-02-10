import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
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
<>
</>
    );
  }
}

export default Saved;
