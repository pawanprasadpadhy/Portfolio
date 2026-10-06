import React from "react";
import { Linkedin, Github, Mail, BookOpen, Code } from "lucide-react";

function Footer({ scrollToSection }) {
	// Environment variables for social links
	const CONNECT_EMAIL =
		process.env.REACT_APP_CONNECT_EMAIL || "mailto:pawan@example.com";
	const CONNECT_LINKEDIN =
		process.env.REACT_APP_CONNECT_LINKEDIN || "https://linkedin.com";
	const CONNECT_GITHUB =
		process.env.REACT_APP_CONNECT_GITHUB || "https://github.com";
	const CONNECT_SCALER =
		process.env.REACT_APP_CONNECT_SCALER || "https://www.scaler.com/";
	const DSA_SHEET_URL =
		process.env.REACT_APP_DSA_SHEET_URL || "https://notion.so";

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-grid">
					<div>
						<h3 className="footer-title">Pawan Prasad Padhy</h3>
						<p className="footer-text">
							Full Stack MERN Developer passionate about creating
							exceptional web experiences.
						</p>
					</div>

					<div>
						<h3 className="footer-title">Quick Links</h3>
						<ul className="footer-links">
							<li>
								<button
									onClick={() => scrollToSection("profile")}
									className="footer-link"
								>
									Profile
								</button>
							</li>
							<li>
								<button
									onClick={() =>
										scrollToSection("experience")
									}
									className="footer-link"
								>
									Experience
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("education")}
									className="footer-link"
								>
									Education
								</button>
							</li>
							<li>
								<button
									onClick={() =>
										scrollToSection("certifications")
									}
									className="footer-link"
								>
									Certifications
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("projects")}
									className="footer-link"
								>
									Projects
								</button>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="footer-title">DSA Resources</h3>
						<ul className="footer-links">
							<li>
								<a
									href={DSA_SHEET_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
									style={{
										display: "flex",
										alignItems: "center",
										gap: "8px",
									}}
								>
									<BookOpen size={16} />
									DSA Sheet
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="footer-title">Connect</h3>
						<div className="social-links">
							<a
								href={CONNECT_LINKEDIN}
								target="_blank"
								rel="noopener noreferrer"
								className="social-icon"
							>
								<Linkedin size={20} />
							</a>
							<a
								href={CONNECT_GITHUB}
								target="_blank"
								rel="noopener noreferrer"
								className="social-icon"
							>
								<Github size={20} />
							</a>
							<a
								href={CONNECT_SCALER}
								target="_blank"
								rel="noopener noreferrer"
								className="social-icon"
								title="Scaler Profile"
							>
								<Code size={20} />
							</a>
							<a href={CONNECT_EMAIL} className="social-icon">
								<Mail size={20} />
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>&copy; 2025 Pawan Prasad Padhy. All rights reserved.</p>
					<p className="footer-built">
						Built with React, Node.js, and passion for web
						development.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
