const { Resend } = require("resend");

const sendEmail = async (options) => {
	try {
		console.log("📧 Attempting to send email via Resend...");

		if (!process.env.RESEND_API_KEY) {
			console.error(
				"❌ RESEND_API_KEY not found in environment variables",
			);
			return { success: false, error: "Email service not configured" };
		}

		const resend = new Resend(process.env.RESEND_API_KEY);

		const emailData = {
			from: `Portfolio Contact <onboarding@resend.dev>`, // Resend's verified sender
			to: [process.env.EMAIL_USER || "beingpawanppp@gmail.com"],
			reply_to: options.replyTo,
			subject: options.subject,
			html: options.html,
		};

		console.log("Sending email to:", emailData.to);
		const data = await resend.emails.send(emailData);

		console.log("✅ Email sent successfully!");
		console.log("Email ID:", data.id);
		return { success: true, messageId: data.id };
	} catch (error) {
		console.error("❌ Email send error:");
		console.error("Error message:", error.message);
		console.error("Full error:", error);
		return { success: false, error: error.message };
	}
};

module.exports = sendEmail;
