var express = require('express');
var router = express.Router();
const crown2Controller_06 = require('../controllers/crown2Controller_06');

/* GET home page. */
router.get('/', crown2Controller_06.getCategories);

module.exports = router;
