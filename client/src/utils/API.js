import axios from "axios";

export default {
  // Gets all books
  getAllItems: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getOneItem: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveItem: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
