import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Result from "../components/Results";
import Axios from "axios";
import Searchbar from "../components/Searchbar";
class Searchpage extends React.Component {
  state = {
    page: "search"
  };

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Jumbotron />
        <br />
        <Searchbar />
        <br />
        <Result page={this.state.page} />
      </div>
    );
  }
}

export default Searchpage;
