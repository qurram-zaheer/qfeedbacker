require("../models/User");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("Users");

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        name: profile.name.givenName
      }).save();
      done(null, user);
    }
  )
);
