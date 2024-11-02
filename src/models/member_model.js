const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    createdAt: Date,
    updateAt: Date
})

const memberModel = mongoose.model('member',memberSchema)

module.exports = memberModel