var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '山东航空北京维修基地OA' });
});

module.exports = router;