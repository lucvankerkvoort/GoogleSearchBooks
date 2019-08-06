import React from "react";

class Searchbar extends React.Component {
  state = {
    search: ""
  };
  handleClick = event => {
    event.preventDefault();
    this.props.onSearch(this.state.search);
  };
  handleChange = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    return (
      <div className="container border p-5">
        <div className="row">
          <h5>Book Search</h5>
        </div>
        <div className="row">
          <form>
            <div className="form-group">
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control"
                id="booksearch"
                placeholder="Search for books"
              />
              <button
                type="submit"
                onClick={this.handleClick}
                className="btn btn-primary justify-content-end"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
