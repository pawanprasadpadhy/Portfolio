const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
	try {
		// Create transporter
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// Email options
		const mailOptions = {
			from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_USER, // Send to yourself
			subject: options.subject,
			html: options.html,
			replyTo: options.replyTo, // User's email for easy reply
		};

		// Send email
		const info = await transporter.sendMail(mailOptions);
		console.log("✅ Email sent:", info.messageId);
		return { success: true, messageId: info.messageId };
	} catch (error) {
		console.error("❌ Email send error:", error);
		return { success: false, error: error.message };
	}
};

module.exports = sendEmail;
