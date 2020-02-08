import axios from "axios";

export default {

  //Item API Methods

  // Gets all items
  getAllItems: function () {
    return axios.get("/api/items");
  },
  // Gets a item with the given id
  getOneItem: function (id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes a item with the given id
  deleteItem: function (id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveItem: function (itemData) {
    return axios.post("/api/items", itemData);
  },

  //List API Methods

  // Gets all list
  getAllLists: function () {
    return axios.get("/api/lists");
  },
  // Gets a list with the given id
  getOneList: function (id) {
    return axios.get("/api/lists/" + id);
  },
  // Deletes a list with the given id
  deleteList: function (id) {
    return axios.delete("/api/lists/" + id);
  },
  // Saves a list to the database
  saveList: function (listData) {
    return axios.post("/api/lists", listData);
  },

  //User API Methods

  // Gets all user

  getAllUsers: function () {
    return axios.get("/api/user");
  },
  // Gets a user with the given id
  getOneUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes a user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    console.log("This is userData: " + userData);
    return axios.post("/api/user", userData);
  },

  //Scraper API Methods

  //Scrapes walmart for the first product with the search term
  scrapeWalmart: function (searchTerm) {
    return axios.get("/api/walmart/" + searchTerm);
  }
};
