const authorModel = require("../models/author_model")
const bookModel = require("../models/book_model")

const testController = {}

testController.healthCheck = (req,res) => {
    res.status(200).json({
        ping : "pong !"
    })
}

const testController = {}

testController.healthCheck = async (req,res) => {
    const books = await bookModel.findById(req.params.id)

    for (const book of books){
        const author = await authorModel.findById(book.authorId)
        const category = await categoryModel.findById(book.categoryId)
    }
    res.status(200).json({
        ping : "pong !"
    })
}

module.exports = testController