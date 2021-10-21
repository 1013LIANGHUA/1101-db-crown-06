const Category_06 = require('../models/category_06');

exports.getCategories = async (req, res) => {
  try {
    return await Category_06.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};
