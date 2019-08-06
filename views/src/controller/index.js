import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("api/books");
  },
  pushBooks: function(bookData) {
    return axios.post("api/books", bookData);
  },
  deleteBooks: function(id) {
    return axios.get("api/books/" + id);
  }
};
