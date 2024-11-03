const DB = require('../models');
const ResponseHelper = require('../utils/response');

class CategoryController {

    static async getAllCategory(req, res) {
      try {
        const items = await DB.Category.find();
        return ResponseHelper.success(res, items, 'sukses mengambil data kategori');
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async getByIdCategory(req, res) {
      try {
        const items = await DB.Category.findById(req.params.id);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async createCategory(req, res) {
      try {
        const items = await DB.Category.create(req.body);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async updateCategory(req, res) {
      try {
        if(!req.params.id){
          return ResponseHelper.error(res, 'ID not provided!', 400)
        }
        const items = await DB.Category.findByIdAndUpdate(req.params.id, req.body);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async deleteCategory(req, res) {
      try {
        if(!req.params.id){
          return ResponseHelper.error(res, 'ID not provided!', 400)
        }
        const items = await DB.Category.findByIdAndDelete(req.params.id);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }
}

module.exports = CategoryController