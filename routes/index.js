var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Duduxiong' });
});


router.get('/restaurants', function(req, res, next) {
	// mongoose.model('restaurants', {name: String});
	mongoose.model('restaurants').find(function(err, restaurants){
	  res.send(restaurants);
	}).limit(20);
});
	

module.exports = router;
