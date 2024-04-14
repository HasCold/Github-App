import passport from "passport";
import dotenv from 'dotenv';
var GitHubStrategy = require('passport-github2').Strategy;

dotenv.config();

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
  passport.deserializeUser(function(obj: Object, done) {
    done(null, obj);
});

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/"
  },
  function(accessToken: string, refreshToken: string, profile: string, done: Function) {
    // asynchronous verification, for effect...
    console.log("Profile", profile);
  }
));


