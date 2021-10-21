const serviceCrown2Controller_06 = require('./serviceCrown2Controller_06');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_06.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};
