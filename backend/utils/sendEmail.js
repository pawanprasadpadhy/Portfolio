const { Resend } = require("resend");

const sendEmail = async (options) => {
	if (!process.env.RESEND_API_KEY) {
		console.error("❌ RESEND_API_KEY not found in environment variables");
		return { success: false, error: "Email service not configured" };
	}

	const recipient = (
		process.env.EMAIL_TO ||
		process.env.EMAIL_USER ||
		""
	).trim();
	if (!recipient) {
		console.error(
			"❌ EMAIL_TO (or EMAIL_USER) not found in environment variables",
		);
		return { success: false, error: "Email recipient not configured" };
	}

	const resend = new Resend(process.env.RESEND_API_KEY);

	// send() does not throw on API errors; it returns { data, error }
	const { data, error } = await resend.emails.send({
		// onboarding@resend.dev only delivers to your Resend account email.
		// Use an address on a domain verified in Resend to send anywhere else.
		from:
			process.env.EMAIL_FROM ||
			"Portfolio Contact <onboarding@resend.dev>",
		to: [recipient],
		replyTo: options.replyTo,
		subject: options.subject,
		html: options.html,
	});

	if (error) {
		console.error("❌ Resend error:", error.name, error.message);
		return { success: false, error: error.message };
	}

	console.log("✅ Email sent, id:", data.id);
	return { success: true, messageId: data.id };
};

module.exports = sendEmail;
