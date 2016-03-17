/**
 * Created by lehoon on 2016/3/16.
 */
/**
 * log for js
 */
var express = require('express');
var router = express.Router();


var fs = require('fs');
//var accesslog = fs.createWriteStream('access.log', {flags : 'a'});
var errorlog = fs.createWriteStream('error.log', {flags : 'a'});

/* GET home page. */
router.post('/', function(req, res, next) {
    errorlog.write(JSON.stringify(req.body) + '\n');
    res.json({message : 'success'});
});

module.exports = router;