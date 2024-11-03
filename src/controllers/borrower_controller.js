const DB = require('../models');
const ResponseHelper = require('../utils/response');

class BorrowerController {

    static async getAllBorrower(req, res) {
      try {
        const items = await DB.Borrower.find();
        return ResponseHelper.success(res, items, 'sukses mengambil data kategori');
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async getByIdBorrower(req, res) {
      try {
        const items = await DB.Borrower.findById(req.params.id);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async createBorrower(req, res) {
      try {
        const items = await DB.Borrower.create(req.body);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async updateBorrower(req, res) {
      try {
        if(!req.params.id){
          return ResponseHelper.error(res, 'ID not provided!', 400)
        }
        const items = await DB.Borrower.findByIdAndUpdate(req.params.id, req.body);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }

    static async deleteBorrower(req, res) {
      try {
        if(!req.params.id){
          return ResponseHelper.error(res, 'ID not provided!', 400)
        }
        const items = await DB.Borrower.findByIdAndDelete(req.params.id);
        return ResponseHelper.success(res, items);
      } catch (error) {
        return ResponseHelper.error(res, error.message);
      }
    }
}

module.exports = BorrowerController