const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    categoryId: String,
    authorId: String,
    title : String,   
    year_realese: Number,
    synopsys: String,
    coverUrl: String,
    createdAt: Date,
    updateAt: Date
})

const bookModel = mongoose.model('book',bookSchema)

module.exports = bookModel