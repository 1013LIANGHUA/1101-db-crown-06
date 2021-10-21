var express = require('express');
var router = express.Router();
const apiCrown2Controller_06 = require('../controllers/apiCrown2Controller_06');

/* GET home page. */
router.get('/category_06', apiCrown2Controller_06.getCategories);

module.exports = router;
