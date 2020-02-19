import axios from "axios";

export default {

  //Item API Methods

  // Gets all items
  getItem: function () {
    console.log("this is api.js getItem")
    return axios.get("/api/item");
  },
  // Gets a item with the given id
  getOneItem: function (id) {
    return axios.get("/api/item/" + id);
  },
  // Deletes a item with the given id
  deleteItem: function (id) {
    return axios.delete("/api/item/" + id);
  },
  // Saves a item to the database
  saveItem: function (itemData) {
    return axios.post("/api/item", itemData);
  },

  //List API Methods

  // Gets all list
  getList: function () {
    console.log("this is from list item")
    return axios.get("/api/list");
  },
  // Gets a list with the given id
  getOneList: function (id) {
    return axios.get("/api/list/" + id);
  },
  // Deletes a list with the given id
  deleteList: function (id) {
    return axios.delete("/api/list/" + id);
  },
  // Saves a list to the database
  saveList: function (listData) {
    return axios.post("/api/list", listData);
  },

  //User API Methods

  // Gets all user

  getAllUsers: function () {
    return axios.get("/api/user");
  },
  login: function (user) {
    console.log(user);
    return axios.post("/api/user/login", user);
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
    console.log("This is in API.js" + userData);
    return axios.post("/api/user", userData);
  },

  //Scraper API Methods

  //Scrapes walmart for the first product with the search term
  scrapeWalmart: function (searchTerm) {
    return axios.get("/api/scraper/walmart/" + searchTerm);
  },
  scrapeCraiglist: function (searchTerm) {
    console.log("this is my router")
    console.log(searchTerm)
    return axios.get("/api/scraper/craiglist/" + searchTerm);
  }

};
