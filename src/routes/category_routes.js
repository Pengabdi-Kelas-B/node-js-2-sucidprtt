const express = require("express")
const CategoryController = require("../controllers/category_controller")

const categoryRouter = express.Router()

categoryRouter.get("/categories", CategoryController.getAll)


module.exports = categoryRouter