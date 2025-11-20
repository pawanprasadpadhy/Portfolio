import React, { useState, useEffect } from "react";
import { Menu, X, Download, Mail, Linkedin, Github, Send } from "lucide-react";
import "./App.css";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("background");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formStatus, setFormStatus] = useState(""); // '', 'sending', 'success', 'error'

	// Track active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"background",
				"profile",
				"experience",
				"projects",
			];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Smooth scroll to section
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	// Handle form input changes
	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormStatus("sending");

		try {
			const response = await fetch("http://localhost:5000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok && data.success) {
				setFormStatus("success");
				setFormData({ name: "", email: "", message: "" });
				setTimeout(() => setFormStatus(""), 5000);
			} else {
				setFormStatus("error");
				setTimeout(() => setFormStatus(""), 5000);
			}
		} catch (error) {
			console.error("Error:", error);
			setFormStatus("error");
			setTimeout(() => setFormStatus(""), 5000);
		}
	};

	return (
		<div className="app">
			{/* Navigation Bar */}
			<nav className="navbar">
				<div className="nav-container">
					<div className="nav-content">
						{/* Logo/Name */}
						<div className="nav-logo">Pawan Prasad Padhy</div>

						{/* Desktop Navigation */}
						<div className="nav-links-desktop">
							<button
								onClick={() => scrollToSection("background")}
								className={`nav-link ${
									activeSection === "background"
										? "active"
										: ""
								}`}
							>
								Background
							</button>
							<button
								onClick={() => scrollToSection("profile")}
								className={`nav-link ${
									activeSection === "profile" ? "active" : ""
								}`}
							>
								Profile
							</button>
							<button
								onClick={() => scrollToSection("experience")}
								className={`nav-link ${
									activeSection === "experience"
										? "active"
										: ""
								}`}
							>
								Experience
							</button>
							<button
								onClick={() => scrollToSection("projects")}
								className={`nav-link ${
									activeSection === "projects" ? "active" : ""
								}`}
							>
								Projects
							</button>
							<a
								href="/resume.pdf"
								download
								className="nav-link resume-link"
							>
								Resume <Download size={16} />
							</a>
							<div className="profile-icon">PP</div>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="mobile-menu-btn"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="nav-links-mobile">
						<button
							onClick={() => scrollToSection("background")}
							className="mobile-nav-link"
						>
							Background
						</button>
						<button
							onClick={() => scrollToSection("profile")}
							className="mobile-nav-link"
						>
							Profile
						</button>
						<button
							onClick={() => scrollToSection("experience")}
							className="mobile-nav-link"
						>
							Experience
						</button>
						<button
							onClick={() => scrollToSection("projects")}
							className="mobile-nav-link"
						>
							Projects
						</button>
						<a
							href="/resume.pdf"
							download
							className="mobile-nav-link"
						>
							Resume
						</a>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section className="hero">
				<div className="container">
					<h1 className="hero-title">Welcome to My Portfolio</h1>
					<p className="hero-subtitle">
						Full Stack Developer | MERN Specialist
					</p>
					<button
						onClick={() => scrollToSection("profile")}
						className="cta-button"
					>
						Explore My Work
					</button>
				</div>
			</section>

			{/* Background Section */}
			<section id="background" className="section section-alt">
				<div className="container">
					<h2 className="section-title">Background</h2>
					<div className="card">
						<p className="text-content">
							I'm a passionate Full Stack Developer specializing
							in the MERN stack (MongoDB, Express.js, React,
							Node.js). With a strong foundation in both frontend
							and backend technologies, I create scalable and
							efficient web applications.
						</p>
						<p className="text-content">
							My journey in web development started with a
							curiosity about how things work on the internet.
							Over time, this curiosity transformed into a
							professional career where I've had the opportunity
							to work on diverse projects ranging from e-commerce
							platforms to real-time data applications.
						</p>
						<div className="skills-grid">
							<div className="skill-card">
								<h3 className="skill-title">Frontend</h3>
								<p className="skill-text">
									React, JavaScript, HTML5, CSS3, Tailwind
									CSS, Redux
								</p>
							</div>
							<div className="skill-card">
								<h3 className="skill-title">Backend</h3>
								<p className="skill-text">
									Node.js, Express.js, RESTful APIs, MongoDB,
									PostgreSQL
								</p>
							</div>
							<div className="skill-card">
								<h3 className="skill-title">Tools</h3>
								<p className="skill-text">
									Git, Docker, AWS, Postman, VS Code, Jira
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Profile Section */}
			<section id="profile" className="section">
				<div className="container">
					<h2 className="section-title">Profile</h2>
					<div className="two-column-grid">
						<div className="card">
							<h3 className="card-title">About Me</h3>
							<p className="text-content">
								I'm Pawan Prasad Padhy, a dedicated developer
								who believes in writing clean, maintainable code
								and creating user-centric applications. My
								approach combines technical expertise with
								creative problem-solving to deliver exceptional
								digital experiences.
							</p>
							<p className="text-content">
								When I'm not coding, I enjoy exploring new
								technologies, contributing to open-source
								projects, and sharing knowledge with the
								developer community.
							</p>
						</div>
						<div className="card">
							<h3 className="card-title">Quick Facts</h3>
							<ul className="facts-list">
								<li className="fact-item">
									<span className="bullet">▹</span>
									<span>Full Stack MERN Developer</span>
								</li>
								<li className="fact-item">
									<span className="bullet">▹</span>
									<span>
										Passionate about clean code and best
										practices
									</span>
								</li>
								<li className="fact-item">
									<span className="bullet">▹</span>
									<span>
										Experience with Agile methodologies
									</span>
								</li>
								<li className="fact-item">
									<span className="bullet">▹</span>
									<span>Strong problem-solving skills</span>
								</li>
								<li className="fact-item">
									<span className="bullet">▹</span>
									<span>
										Continuous learner and tech enthusiast
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="section section-alt">
				<div className="container">
					<h2 className="section-title">Experience</h2>
					<div className="experience-list">
						<div className="experience-card purple-border">
							<div className="experience-header">
								<div>
									<h3 className="experience-title">
										Full Stack Developer
									</h3>
									<p className="experience-company">
										Tech Company Name
									</p>
								</div>
								<span className="experience-date">
									2022 - Present
								</span>
							</div>
							<ul className="experience-points">
								<li className="experience-point">
									<span className="bullet-purple">•</span>
									<span>
										Developed and maintained full-stack web
										applications using MERN stack
									</span>
								</li>
								<li className="experience-point">
									<span className="bullet-purple">•</span>
									<span>
										Implemented RESTful APIs and integrated
										third-party services
									</span>
								</li>
								<li className="experience-point">
									<span className="bullet-purple">•</span>
									<span>
										Collaborated with cross-functional teams
										to deliver high-quality products
									</span>
								</li>
							</ul>
						</div>

						<div className="experience-card pink-border">
							<div className="experience-header">
								<div>
									<h3 className="experience-title">
										Frontend Developer
									</h3>
									<p className="experience-company">
										Previous Company
									</p>
								</div>
								<span className="experience-date">
									2020 - 2022
								</span>
							</div>
							<ul className="experience-points">
								<li className="experience-point">
									<span className="bullet-pink">•</span>
									<span>
										Built responsive user interfaces using
										React and modern CSS frameworks
									</span>
								</li>
								<li className="experience-point">
									<span className="bullet-pink">•</span>
									<span>
										Optimized application performance and
										improved user experience
									</span>
								</li>
								<li className="experience-point">
									<span className="bullet-pink">•</span>
									<span>
										Participated in code reviews and
										maintained code quality standards
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="section">
				<div className="container">
					<h2 className="section-title">Projects</h2>
					<div className="projects-grid">
						{[
							{
								title: "E-Commerce Platform",
								description:
									"Full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
								tech: ["React", "Node.js", "MongoDB", "Stripe"],
							},
							{
								title: "Task Management App",
								description:
									"Collaborative task management tool with real-time updates, team features, and progress tracking.",
								tech: [
									"React",
									"Express",
									"Socket.io",
									"PostgreSQL",
								],
							},
							{
								title: "Social Media Dashboard",
								description:
									"Analytics dashboard for social media metrics with data visualization and reporting features.",
								tech: [
									"React",
									"Chart.js",
									"Node.js",
									"MongoDB",
								],
							},
							{
								title: "Blog Platform",
								description:
									"Modern blogging platform with markdown support, user profiles, and comment system.",
								tech: ["React", "Express", "MongoDB", "JWT"],
							},
							{
								title: "Weather Application",
								description:
									"Real-time weather app with location-based forecasts and interactive maps.",
								tech: ["React", "OpenWeather API", "Mapbox"],
							},
							{
								title: "Portfolio CMS",
								description:
									"Content management system for portfolio websites with customizable templates.",
								tech: ["React", "Node.js", "MongoDB", "AWS S3"],
							},
						].map((project, index) => (
							<div key={index} className="project-card">
								<h3 className="project-title">
									{project.title}
								</h3>
								<p className="project-description">
									{project.description}
								</p>
								<div className="tech-tags">
									{project.tech.map((tech, i) => (
										<span key={i} className="tech-tag">
											{tech}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="section section-alt">
				<div className="container-small">
					<h2 className="section-title">Have Queries? Contact Me</h2>
					<p className="section-subtitle">
						Feel free to reach out for collaborations or just a
						friendly chat
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

			{/* Footer */}
			<footer className="footer">
				<div className="container">
					<div className="footer-grid">
						<div>
							<h3 className="footer-title">Pawan Prasad Padhy</h3>
							<p className="footer-text">
								Full Stack MERN Developer passionate about
								creating exceptional web experiences.
							</p>
						</div>

						<div>
							<h3 className="footer-title">Quick Links</h3>
							<ul className="footer-links">
								<li>
									<button
										onClick={() =>
											scrollToSection("background")
										}
										className="footer-link"
									>
										Background
									</button>
								</li>
								<li>
									<button
										onClick={() =>
											scrollToSection("profile")
										}
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
										onClick={() =>
											scrollToSection("projects")
										}
										className="footer-link"
									>
										Projects
									</button>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="footer-title">Connect</h3>
							<div className="social-links">
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
								>
									<Linkedin size={20} />
								</a>
								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
								>
									<Github size={20} />
								</a>
								<a
									href="mailto:pawan@example.com"
									className="social-icon"
								>
									<Mail size={20} />
								</a>
							</div>
						</div>
					</div>

					<div className="footer-bottom">
						<p>
							&copy; 2024 Pawan Prasad Padhy. All rights reserved.
						</p>
						<p className="footer-built">
							Built with React, Node.js, and passion for web
							development.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
