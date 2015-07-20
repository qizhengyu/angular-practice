var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
// var bibleObj = require('./path/api/bible1.json');

var homeController = require('./homeController');
var localLoginController = require('../controller/localLoginController');

// var passport = require('passport');

// Define a middleware function to be used for every secured routes
var auth = function(req, res, next){
  if (!req.isAuthenticated()) 
    res.send(401);
  else
    next();
};


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Xiong' });
});


router.get('/restaurants', function(req, res, next) {
	mongoose.model('restaurants').find(function(err, restaurants){
		res.send(restaurants);
	}).limit(20);
});



router.post('/home', homeController.view);

/**
* Local Login Controller
*/
router.get('/users', auth, localLoginController.users);
router.get('/loggedin', localLoginController.isLoggedIn);
router.post('/login', localLoginController.authenticate, localLoginController.login);
router.post('/logout', localLoginController.logout);









var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var GOOGLE_CLIENT_ID = "id.apps.googleusercontent.com";
var GOOGLE_CLIENT_SECRET = "secret";







// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
      
//       // To keep the example simple, the user's Google profile is returned to
//       // represent the logged-in user.  In a typical application, you would want
//       // to associate the Google account with a user record in your database,
//       // and return that user instead.
//       return done(null, profile);
//     });
//   }
// ));



// router.get('/auth/google',
// 	passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }), 
// 	function(req, res){
//     // The request will be redirected to Google for authentication, so this
//     // function will not be called.
//   });

// router.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login');
// }



module.exports = router;
