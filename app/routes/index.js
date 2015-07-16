var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
// var bibleObj = require('./path/api/bible1.json');

var homeController = require('./homeController');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Duduxiong' });
});


router.get('/restaurants', function(req, res, next) {
	mongoose.model('restaurants').find(function(err, restaurants){
	  res.send(restaurants);
	}).limit(20);
});


router.post('/home', homeController.view);

module.exports = router;
