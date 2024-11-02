const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    name: String,
    createdAt: Date,
    updateAt: Date
})

const authorModel = mongoose.model('author',authorSchema)

module.exports = authorModel
