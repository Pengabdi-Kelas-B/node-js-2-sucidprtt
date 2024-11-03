const express = require("express")
const CategoryController = require("../controllers/category_controller")

const categoryRouter = express.Router()

categoryRouter.get("/categories", CategoryController.getAllCategory)
categoryRouter.get("/category/:id", CategoryController.getByIdCategory)
categoryRouter.post("/category", CategoryController.createCategory)
categoryRouter.put("/category/:id", CategoryController.updateCategory)
categoryRouter.delete("/category/:id", CategoryController.deleteCategory)

module.exports = categoryRouter