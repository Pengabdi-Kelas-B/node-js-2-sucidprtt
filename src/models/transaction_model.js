const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    memberId: String,
    bookId: String,
    type : ['PEMINJAMAN', 'PENGEMBALIAN'],
    transactionDate: Date,
    createdAt: Date,
    updateAt: Date
})

const transactionModel = mongoose.model('transaction',transactionSchema)

module.exports = transactionModel