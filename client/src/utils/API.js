import axios from "axios";

export default {
  // Searches the Google according to the search criteria given in the form
  getNewBooks: function(title, author, image, link) {
    return axios.get(``);
  },
  // Gets saved books
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/abooks", bookData);
  }
};