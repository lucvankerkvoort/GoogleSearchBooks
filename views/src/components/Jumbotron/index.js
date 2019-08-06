import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">React Google Books Search</h1>
            <p className="lead">Search for and Save Books of Interest</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
