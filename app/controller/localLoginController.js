var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//==================================================================
// Define the strategy to be used by PassportJS
passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === "admin" && password === "admin"){
      return done(null, {name: "admin"});
    } // stupid example
    return done(null, false, { message: 'Incorrect username.' });
  }
));


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});



exports.users = function(req, res){
  res.send([{name: "user1"}, {name: "user2"}]);
}

exports.isLoggedIn = function(req, res) {
	console.log('isAuthenticated? ', req.isAuthenticated());
  res.send(req.isAuthenticated() ? req.user : '0');
}

exports.authenticate = passport.authenticate('local');

exports.login = function(req, res) {
  res.send(req.user);
}

exports.logout = function(req, res){
  req.logOut();
  res.send(200);
}
