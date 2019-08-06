import React from "react";
import API from "../../controller";
import Card from "../Card";

class Result extends React.Component {
  state = {
    books: this.props
  };
  saveBook = bookData => {
    API.pushBooks(bookData).then(result => console.log(result));
    window.location.reload();
  };

  deleteBook = bookId => {
    API.deleteBooks(bookId).then(result => console.log(result));
    window.location.reload();
  };

  render() {
    console.log(this.props);
    let title = "";
    if (this.props.page === "search") {
      title = "Search Results";
    } else {
      title = "Saved Books";
    }
    return (
      <div className="container border">
        <h4>{title}</h4>
        <div className="container border">
          {this.state.books.map((book, i) => (
            <Card
              key={i}
              id={book._id}
              page={this.props.page}
              authors={book.authors}
              link={book.link}
              title={book.title}
              image={book.image}
              alt={book.title}
              description={book.description}
              handleSave={this.saveBook}
              handleDelete={this.deleteBook}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Result;
