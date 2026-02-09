const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

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

		// Send response immediately
		res.status(201).json({
			success: true,
			message: "Message sent successfully!",
			data: contact,
		});

		// Send email notification in background (don't await)
		const emailHtml = `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
				<h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
					New Contact Form Submission
				</h2>
				<div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
					<p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
					<p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
					<p style="margin: 10px 0;"><strong>Message:</strong></p>
					<div style="background-color: white; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 10px;">
						${message}
					</div>
				</div>
				<p style="color: #666; font-size: 12px; margin-top: 20px;">
					This message was sent from your portfolio contact form.
				</p>
			</div>
		`;

		// Send email without blocking (fire and forget)
		sendEmail({
			subject: `Portfolio Contact: Message from ${name}`,
			html: emailHtml,
			replyTo: email,
		}).catch((err) => console.error("Email error:", err));
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
