const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		// Check for user
		const user = await User.findOne({ username });

		if (user && (await user.matchPassword(password))) {
			res.json({
				_id: user.id,
				username: user.username,
				token: generateToken(user._id),
			});
		} else {
			res.status(401).json({
				success: false,
				error: "Invalid credentials",
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, error: "Server error" });
	}
});

module.exports = router;
