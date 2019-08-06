import React from "react";

class Card extends React.Component {
  handleSave = () => {
    this.props.handleSave(this.props);
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.id);
  };
  render() {
    let event = [];
    let button = "";
    if (this.props.page !== "search") {
      event = this.handleDelete;
      button = "Delete";
    } else {
      event = this.handleSave;
      button = "Save";
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h3>{this.props.title}</h3>
            <h6>{this.props.authors}</h6>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={event}>
              {button}
            </button>
            <a href={this.props.link} target="_blank">
              <button className="btn btn-primary">View</button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <img
              src={this.props.image}
              alt={this.props.alt}
              width="150"
              height="200"
            />
          </div>
          <div className="col-md-10">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
