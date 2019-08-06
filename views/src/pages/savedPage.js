import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Result from "../components/Results";
import API from "../controller";

class Savedpage extends React.Component {
  state = {
    books: [],
    page: "Saved"
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks().then(result => this.setState({ books: result.data }));
  };

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Jumbotron />
        <br />
        <Result books={this.state.books} page={this.state.page} />
      </div>
    );
  }
}

export default Savedpage;
