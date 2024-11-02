const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: String,
    createdAt: Date,
    updateAt: Date
})

const categoryModel = mongoose.model('category',categorySchema)

module.exports = categoryModel