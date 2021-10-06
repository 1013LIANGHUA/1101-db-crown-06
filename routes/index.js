var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'chenlianghua',
    id: '209410306',
  });
});

module.exports = router;
