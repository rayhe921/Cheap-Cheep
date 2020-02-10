// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import API from "../utils/API";
// import InfoCard from "../components/InfoCard"



// class list extends Component {
//     state = {
//       list: []
//     };
  
//     componentDidMount() {
//       this.loaditem();
//     }
  
//     loaditem = () => {
//       API.getAllLists()
//         .then(res => this.setState({ list: res.data }))

//         .catch(err => console.log(err));

//     };


//     render() {
//         console.log(this.state.list);
//         return(
//             <main>
//                 <InfoCard Items={this.state.list} />
//             </main>
//         );
//     }
// }

// export default list;
