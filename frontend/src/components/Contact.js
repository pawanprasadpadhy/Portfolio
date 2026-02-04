import React from "react";
import { Send } from "lucide-react";

function Contact({ formData, handleInputChange, handleSubmit, formStatus }) {
	return (
		<section id="contact" className="section section-alt">
			<div className="container-small">
				<h2 className="section-title">Have Queries? Contact Me</h2>
				<p className="section-subtitle">
					Feel free to reach out for collaborations or just a friendly
					chat
				</p>

				<div className="contact-form-card">
					<div className="form-group">
						<label className="form-label">Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
							className="form-input"
							placeholder="Your Name"
						/>
					</div>

					<div className="form-group">
						<label className="form-label">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							required
							className="form-input"
							placeholder="your.email@example.com"
						/>
					</div>

					<div className="form-group">
						<label className="form-label">Message</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							required
							rows="5"
							className="form-textarea"
							placeholder="Your message..."
						/>
					</div>

					<button
						onClick={handleSubmit}
						disabled={formStatus === "sending"}
						className="submit-button"
					>
						{formStatus === "sending"
							? "Sending..."
							: "Send Message"}
						<Send size={18} />
					</button>

					{formStatus === "success" && (
						<p className="form-message success">
							✅ Message sent successfully!
						</p>
					)}
					{formStatus === "error" && (
						<p className="form-message error">
							❌ Failed to send message. Please try again.
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default Contact;
