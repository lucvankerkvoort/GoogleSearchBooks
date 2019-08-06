import React from "react";

class Searchbar extends React.Component {
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
                className="form-control"
                id="booksearch"
                placeholder="Search for books"
              />
              <button
                type="submit"
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
