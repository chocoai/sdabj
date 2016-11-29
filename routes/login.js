var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '山东航空北京维修基地OA' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: '登陆成功过' });
});

module.exports = router;