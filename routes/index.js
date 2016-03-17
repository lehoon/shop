var express = require('express');
var router = express.Router();

var catagory = require('../data/catagory.json');
var skill = require('../data/skill.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* GET catagory data. */
router.get('/category/list', function(req, res, next) {
  res.json(catagory);
});

/* GET seckill data. */
router.get('/commodity/seckill', function(req, res, next) {
  res.json(skill);
});

module.exports = router;
