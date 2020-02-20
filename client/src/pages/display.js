import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Shoplist from "../components/ShopList";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Form from "../components/Form";
import API from "../utils/API";
import UsersList from "../components/List";
import LoadingGif from "../components/Modal/imgs/loadingChick.gif";
import notFoundPic from "../components/Modal/imgs/notFound.jpg";

class Display extends Component {

  state = {
    showModalOne: false,
    showModalTwo: false,
    searchTerm: "",
    items: [],
    lists: [],
    currentList: {},
    listInputText: "",
    scrapForModal: {},
    loading: false,
    userid: "",
    isLoggedIn: false,
    notLoading: false
  };


  componentDidMount() {
    const id = localStorage.getItem("id");
    this.setState({
      userid: id,
      isLoggedIn: true
    });
    console.log(this.state.userid);

    const handleListInsert = (item) => {
      const listOb = {
        listName: item.listName,
        id: item._id
      }
      //console.log(listOb);
      this.state.lists.push(listOb);
      this.setState({ currentList: this.state.lists[0] })
      this.populateItems();
      this.forceUpdate();
      console.log(this.state.lists);
      console.log(this.state.currentList);
    }

    API.getList({ user: id })
      .then(function (response) {
        console.log(response.data);
        response.data.forEach(handleListInsert)
      });

    console.log("end of componentDidMount");
    console.log(this.state.currentList);
  };

  addCraigItem = (event) => {
    event.preventDefault();

    console.log("this is working save item")
    API.saveItem()
    const newItem = {
      name: this.state.scrapForModal.name,
      price: this.state.scrapForModal.price,
      website: this.state.scrapForModal.website,
      link: this.state.scrapForModal.link,
      image: this.state.scrapForModal.image
    }
    console.log("newItem is: " + newItem)
    API.saveItem(newItem).then(function (response) {
      console.log("response.data is: " + response)
    });
  }

  searchForCraiglist = (event) => {
    const handleModalInsert = (scrapedData) => {
      this.setState({ scrapForModal: scrapedData, notLoading: true });
      console.log("notLoading: " + this.state.notLoading);
      console.log("this.state.scrapedataForCraiglistModal" + JSON.stringify(this.state.scrapForModal))
    }
    event.preventDefault();
    if (!this.state.searchTerm) {
      alert("Please enter a search term!");
    } else {
      console.log("craiglist searching");
      this.setState({ showModalOne: true, notloading: false })
      API.scrapecraiglist(this.state.searchTerm).then(function (response) {
        console.log(response);
        const scrapedData = {
          name: response.data.name,
          price: response.data.price,
          link: response.data.link,
          image: response.data.image,
          website: "Craigslist"
        }
        console.log("scrapedData: " + JSON.stringify(scrapedData))
        handleModalInsert(scrapedData)
      })
        .catch(err => console.log(err))
    }
  }



  getUserLists = (userid) => {
    console.log("hello from getUserLists" + userid);
  };

  populateItems = () => {

    const pushItem = (ItemData) => {
      this.state.items.push(ItemData);
    }

    API.getOneList(this.state.currentList.id)
      .then(function (response) {
        console.log(response);
        console.log(response.data.Items);
        response.data.Items.forEach(ItemID => function () {
          console.log(ItemID);
          API.getOneItem(ItemID).then(function (itemData) {
            console.log("GetOneItem console log.");
            pushItem(itemData);
          })
        });
      })
      .catch(err => console.log(err));

  };

  addNewItem = (event) => {
    event.preventDefault();

    const newItem = {
      name: this.state.scrapForModal.name,
      price: this.state.scrapForModal.price,
      website: this.state.scrapForModal.website,
      link: this.state.scrapForModal.link,
      image: this.state.scrapForModal.image
    }

    const addItemToList = (scrapedData) => {
      console.log("In addItemToList Scraped Data is: " + JSON.stringify(scrapedData));
      console.log("In addItemToList current list is: " + JSON.stringify(this.state.currentList));

      this.state.items.push(scrapedData);
      this.forceUpdate();

      API.addItemToList(this.state.currentList.id, scrapedData).then(function (response) {
        console.log("this is the callback to adding an item to a list: " + response);
      });
    }
    this.setState({ showModalOne: false })
    console.log("newItem is: " + newItem)
    API.saveItem(newItem).then(function (response) {
      console.log("response.data is: " + JSON.stringify(response))
      addItemToList(response.data);
    });

  }

  searchWall = (event) => {
    const handleModalInsert = (scrapedData) => {
      this.setState({ scrapForModal: scrapedData, notLoading: true });
      console.log("this.state.scrapForModal: " + JSON.stringify(this.state.scrapForModal))
    }
    event.preventDefault();
    if (!this.state.searchTerm) {
      alert("Please enter a search term!")
    } else {
      console.log("searching for item");
      this.setState({ showModalOne: true, notLoading: false })
      // console.log("state.notLoading " + this.state.notLoading)
      API.scrapeWalmart(this.state.searchTerm).then(function (response) {
        // console.log(response);
        const scrapedData = {
          name: response.data.name,
          price: response.data.price,
          link: "http://www." + response.data.link,
          image: response.data.image,
          website: "Walmart"
        }
        console.log("scrapedData: " + JSON.stringify(scrapedData))
        handleModalInsert(scrapedData)
      })
        .catch(err => console.log(err));
    }
  }

  hideModalOne = () => {
    this.setState({ showModalOne: false })
  }

  displayModalTwo = (event) => {
    event.preventDefault();
    this.setState({ showModalTwo: true })

    console.log("showModalTwo: " + this.state.showModalTwo)
  };

  hideModalTwo = () => {
    this.setState({ showModalTwo: false })
  }


  submitListModal = (event) => {
    const handleListInsert = (listOb) => {
      this.state.lists.push(listOb);
      console.log("this.state.lists: " + JSON.stringify(this.state.lists))
      this.setState({ listInputText: "" })
    }
    event.preventDefault();
    API.saveList({
      listName: this.state.listInputText
    }).then(function (response) {
      console.log("response " + JSON.stringify(response))
      const newList = {
        listName: response.data.listName,
        id: response.data._id
      }
      handleListInsert(newList)
      console.log("newList: " + JSON.stringify(newList))
    })
    this.setState({ showModalTwo: false })
    console.log("this.state.listInputText: " + this.state.listInputText)
    console.log("this.state.lists: " + JSON.stringify(this.state.lists))
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });

    // console.log(this.state);
  };


  render() {

    const loadingStyle = {
      width: "29.25rem",
      height: "auto"
    };

    return (
      <Container items="floatie">
        <Row>
          <Col size="3">
            <Sidebar>
              {this.state.lists.map(listOb => (
                <UsersList
                  name={listOb.listName}
                  id={listOb.id}
                  key={listOb.id}
                  buttonClick={
                    this.clickList = event => {
                      event.preventDefault();
                      var nextList = {
                        listname: listOb.listName,
                        id: listOb.id
                      }
                      this.setState({ currentList: nextList });
                    }
                  }
                ></UsersList>
              ))}
            </Sidebar>
            <Button
              click={this.displayModalTwo}
              title="Add a List"
            ></Button>
            <Modal
              hideModal={this.hideModalTwo}
              showModalTwo={this.state.showModalTwo}
              title="What would you like to name your new list?"
              body={<Form
                name="listInputText"
                onChange={this.handleInputChange}
                value={this.state.listInputText}
              ></Form>}
              footerClass={true}
              buttonOne="Save"
              buttonTwo="Cancel"
              submit={this.submitListModal}
            ></Modal>
          </Col>
          <Col size="8">

            <Shoplist>
              {this.state.items.map(Item => (
                <tr className="table-success" key={Item._id}>
                  <th className="">
                    <button type="button" className=" btn-sm btn btn-outline-danger btn-dark">X</button>
                  </th>
                  <td>{Item.name}</td>
                  <td>{Item.price}</td>
                  <td><a href={Item.link} target="_blank" rel="noopener noreferrer">Link</a></td>
                  <td>{Item.website}</td>
                </tr>
              ))}
            </Shoplist>

            <div className="row d-flex justifiy-content-center">
              <Input
                clickWall={this.searchWall}
                clickCraigs={this.searchForCraiglist}
                handleInputChange={this.handleInputChange}
                searchTerm={this.state.searchTerm}
              ></Input>

            </div>
          </Col>

          <Modal
            hideModal={this.hideModalOne}
            showModalOne={this.state.showModalOne}
            title={this.state.notLoading ? "Is This What you Wanted?" : "Cheap Cheep is searching, please wait."}
            body={this.state.notLoading ?
              <div>
                <h3>{this.state.scrapForModal.name}</h3>
                <img
                  className="float-center"
                  src={this.state.scrapForModal.image}
                  alt={this.state.scrapForModal.name}
                />
              </div>
              :
              <div>
                <img
                  style={loadingStyle}
                  src={LoadingGif}
                  alt="LoadingGif"
                />
              </div>
            }
            footerClass={this.state.notLoading}
            buttonOne="Yes"
            buttonTwo="No"
            submit={this.addNewItem}
          ></Modal>
        </Row >
      </Container >
    );
  }
}

export default Display;