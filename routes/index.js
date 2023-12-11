var express = require('express');
var router = express.Router();
let userModel=require("./users")
let postModel=require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
