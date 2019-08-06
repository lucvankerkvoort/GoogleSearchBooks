const router = require("express").Router();
const books = require("./books");

// Locals route
router.use("/books", books);

module.exports = router;
