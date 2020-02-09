import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import InfoCard from "../components/InfoCard"



  class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Items: []
        }
    }

    componentWillMount() {
        API.getAllItems().then(
            (response) => {
                console.log(response)
                this.setState({Items: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        console.log(this.state.Items);
        return(
            <main>
                <InfoCard Items={this.state.Items} />
            </main>
        );
    }
}

export default Saved;
