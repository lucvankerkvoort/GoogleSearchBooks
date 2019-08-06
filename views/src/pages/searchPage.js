import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Result from "../components/Results";
import Axios from "axios";
import Searchbar from "../components/Searchbar";

class Searchpage extends React.Component {
  state = {
    page: "search",
    search: []
  };

  handleSearch = searchResult => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchResult}&key=AIzaSyDghyfJssa7MLFXErEUs0wMMddeSknuTOQ`;
    Axios.get(URL).then(result => {
      const res = result.data.items.map(result => {
        let books = {
          title: result.volumeInfo.title,
          link: result.volumeInfo.infoLink,
          image: result.volumeInfo.imageLinks.thumbnail,
          authors: result.volumeInfo.authors[0],
          description: result.volumeInfo.description
        };
        return books;
      });
      console.log(res);
      this.setState({ search: res });
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Jumbotron />
        <br />
        <Searchbar onSearch={this.handleSearch} />
        <br />
        <Result page={this.state.page} books={this.state.search} />
      </div>
    );
  }
}

export default Searchpage;
