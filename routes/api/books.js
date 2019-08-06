// We require the router
const router = require("express").Router();
// We require the object inside of index.js (we have to specifiy which controller we want to use by using the property name)
const books = require("../../controller/bookController");

// Setup the routes for the  api's to hit
router
  .route("/")
  .get(books.findAll)
  .post(books.create);

router.route("/:id").get(books.delete);

module.exports = router;
