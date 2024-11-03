const express = require("express")
const BookController = require("../controllers/book_controller")

const bookRouter = express.Router()

bookRouter.get("/books", BookController.getAllBook)
bookRouter.get("/book/:id", BookController.getByIdBook)
bookRouter.post("/book", BookController.createBook)
bookRouter.put("/book/:id", BookController.updateBook)
bookRouter.delete("/book/:id", BookController.deleteBook)
bookRouter.post("/book/upload", BookController.uploadImageBook)

module.exports = bookRouter