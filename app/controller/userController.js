var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
* Show login form
*/

exports.login = function(req, res){
	res.redirect('#/login');
}