import express from "express";
import passport from "passport";

const router = express.Router();
const CLIENT_URL = process.env.CLIENT_BASE_URL || '';

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
router.get(
	"/github/callback",
	passport.authenticate("github", { failureRedirect: process.env.CLIENT_BASE_URL + "/login" }),
	function (req, res) {
		res.redirect(CLIENT_URL);
	}
);

export default router;