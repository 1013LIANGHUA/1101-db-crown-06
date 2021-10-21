const serviceCrown2Controller_06 = require('./serviceCrown2Controller_06');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_06.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown2_06', {
      data: results,
      title: 'Crown2_06',
      name: 'CHEN LIANG HUA',
      id: `209410306`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};
