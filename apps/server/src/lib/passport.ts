import passport from "passport";
import dotenv from 'dotenv';
import { Profile } from "../types";
var GitHubStrategy = require('passport-github2').Strategy;
const userModel = require ("../model/user.model");

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
    callbackURL: "/api/auth/github/callback"
  },
 async function(accessToken: string, refreshToken: string, profile: Profile, done: Function) {

    const user = await userModel.findOne({username: profile.username});
    if(!user){
      const newUser = userModel({
          name: profile.displayName,
					username: profile.username,
					profileUrl: profile.profileUrl,
					avatarUrl: profile.photos[0].value,
					likedProfiles: [],
					likedBy: [],
      });
      await newUser.save();
      done(null, newUser);
    }else{
      done(null, user);
    }
  }
));


