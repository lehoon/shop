/**
 * Created by lehoon on 2016/3/16.
 */
/**
 * catagory router
 */
var express = require('express');
var router = express.Router();

var catagory = require('./data/catagory.json');
var skill = require('./data/skill.json');

/* GET catagory data. */
router.get('/list', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    res.json(catagory);
});



module.exports = router;