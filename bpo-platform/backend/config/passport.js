// backend/config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('jwt-passport').Strategy;
const { secret } = require('../config/keys');
const User = require('../models/user');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    // Implement local authentication strategy
  }
));

module.exports = {
  JWTStrategy,
  initialize: () => passport.initialize()
};