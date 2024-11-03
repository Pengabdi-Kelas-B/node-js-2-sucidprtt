const express = require("express")
const BorrowingController = require("../controllers/borrowing_controller")

const borrowingRouter = express.Router()

borrowingRouter.get("/borrowing/book/list", BorrowingController.getAll)
// borrowingRouter.get("/borrowing/:id", BorrowingController.getById)
borrowingRouter.post("/borrowing/book", BorrowingController.createBorrow)
borrowingRouter.delete("/borrowing/:id", BorrowingController.deleteBorrow)
borrowingRouter.post("/borrow/book/return", BorrowingController.returnBorrow)

module.exports = borrowingRouter