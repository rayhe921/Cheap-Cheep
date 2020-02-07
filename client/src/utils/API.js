import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/Users");
  },
  // Gets the a user with the given id
  getUser: function(id) {
    return axios.get("/api/Users/" + id);
  },
  // Deletes the user with the given id
  deleteBook: function(id) {
    return axios.delete("/api/Users/" + id);
  },
  // Saves a user to the database
  saveBook: function(userData) {
    return axios.post("/api/Users", userData);
  }
};
