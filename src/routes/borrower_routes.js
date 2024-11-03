const express = require("express")
const BorrowerController = require("../controllers/borrower_controller")

const borrowerRouter = express.Router()

borrowerRouter.get("/borrowers", BorrowerController.getAllBorrower)
borrowerRouter.get("/borrower/:id", BorrowerController.getByIdBorrower)
borrowerRouter.post("/borrower", BorrowerController.createBorrower)
borrowerRouter.put("/borrower/:id", BorrowerController.updateBorrower)
borrowerRouter.delete("/borrower/:id", BorrowerController.deleteBorrower)

module.exports = borrowerRouter