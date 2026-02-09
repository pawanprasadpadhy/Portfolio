const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
router.post("/", async (req, res) => {
	const { name, email, message } = req.body;

	// Validation
	if (!name || !email || !message) {
		return res.status(400).json({
			success: false,
			error: "Please provide name, email, and message",
		});
	}

	try {
		// Create new contact entry
		const contact = await Contact.create({
			name,
			email,
			message,
		});

		res.status(201).json({
			success: true,
			message: "Message sent successfully!",
			data: contact,
		});
	} catch (error) {
		console.error("Contact form error:", error);
		res.status(500).json({
			success: false,
			error: "Failed to send message. Please try again.",
		});
	}
});

// @desc    Get all contacts (for admin)
// @route   GET /api/contact
// @access  Private (add auth middleware later)
router.get("/", async (req, res) => {
	try {
		const contacts = await Contact.find().sort({ createdAt: -1 });
		res.json({
			success: true,
			data: contacts,
		});
	} catch (error) {
		console.error("Error fetching contacts:", error);
		res.status(500).json({
			success: false,
			error: "Failed to fetch contacts",
		});
	}
});

module.exports = router;
