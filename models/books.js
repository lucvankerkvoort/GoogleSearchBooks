// requiring mongoDB from the config folder
var mongoose = require("mongoose");

// using mongo's build in logic to create a schema constructor
var Schema = mongoose.Schema;

// The schema instance used for Locals
var bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true }
});

// We use MongoDB's build in module to create a container so we can export the schema
var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
