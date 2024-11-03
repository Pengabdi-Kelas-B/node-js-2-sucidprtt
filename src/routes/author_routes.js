const express = require("express")
const AuthorController = require("../controllers/author_controller")

const authorRouter = express.Router()

authorRouter.get("/authors", AuthorController.getAllAuthor)
authorRouter.get("/author/:id", AuthorController.getByIdAuthor)
authorRouter.post("/author", AuthorController.createAuthor)
authorRouter.put("/author/:id", AuthorController.updateAuthor)
authorRouter.delete("/author/:id", AuthorController.deleteAuthor)
authorRouter.post("/author/upload", AuthorController.uploadImageAuthor)

module.exports = authorRouter