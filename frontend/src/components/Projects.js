import React from "react";

function Projects() {
	return (
		<section id="projects" className="section">
			<div className="container">
				<h2 className="section-title">Projects</h2>
				<div className="projects-grid">
					{[
						{
							title: "E-Commerce Analytics",
							description:
								"End-to-end analytics on about 100k Olist marketplace orders, from Python cleaning and SQLite modelling to SQL analysis, RFM segmentation, and Tableau and Power BI dashboards.",
							tech: [
								"Python",
								"Pandas",
								"SQL",
								"SQLite",
								"Tableau",
								"Power BI",
							],
						},
						{
							title: "Portfolio Website",
							description:
								"Full-stack portfolio built on the MERN stack, with a responsive React frontend, dynamic routing, and RESTful Express.js APIs backed by MongoDB for contact form submissions and content management.",
							tech: [
								"React.js",
								"Node.js",
								"Express.js",
								"MongoDB",
								"JavaScript",
								"REST APIs",
							],
						},
						{
							title: "Resume Creator",
							description:
								"Markdown-based resume editor with a live preview and one-click ATS-friendly PDF export, using a shared markdown parser on client and server so the preview stays in sync with the generated PDF.",
							tech: [
								"React",
								"Vite",
								"Flask",
								"ReportLab",
								"Python",
								"Markdown",
							],
						},
						{
							title: "Image Classification Model - Transfer Learning Pipeline *",
							description:
								"Image classification model using TensorFlow/Keras (MobileNetV2) on a ~17K-image, 6-class dataset (Intel Image Classification), experimenting with augmentation strategies and training configurations to improve generalization.",
							tech: ["TensorFlow", "Keras", "Python", "OpenCV"],
						},
						{
							title: "IMDB Clone *",
							description:
								"Full-stack IMDB clone using Django and PostgreSQL, integrating the TMDB API for real-time trending movies, with genre-based filtering, pagination and a normalized, indexed database schema.",
							tech: [
								"Django",
								"Python",
								"PostgreSQL",
								"HTML5",
								"Tailwind CSS",
								"JavaScript",
							],
						},
						{
							title: "Trello Clone Application",
							description:
								"Trello clone supporting full CRUD operations across boards, lists, cards and checklists, built with a modular JavaScript architecture and no frontend framework.",
							tech: [
								"HTML5",
								"CSS3",
								"Vanilla JavaScript",
								"Trello REST API",
							],
						},
						{
							title: "Spotify Clone *",
							description:
								"Full-stack Spotify clone with music streaming capabilities, user authentication, and playlist management using Django and PostgreSQL.",
							tech: [
								"Django",
								"Python",
								"PostgreSQL",
								"HTML5",
								"Tailwind CSS",
								"JavaScript",
							],
						},
						{
							title: "BookMyShow Clone *",
							description:
								"Created a clone of BookMyShow using HTML5, CSS3, and Vanilla JavaScript.",
							tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
						},
						{
							title: "To-Do List App",
							description:
								"Interactive task management application with complete CRUD functionality and drag-and-drop reordering.",
							tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
						},
						{
							title: "Kanban Board App",
							description:
								"Task creation and management functionality with color-coded priority levels and local storage persistence.",
							tech: ["HTML5", "CSS3", "JavaScript"],
						},
					].map((project, index) => (
						<div key={index} className="project-card">
							<h3 className="project-title">{project.title}</h3>
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
	);
}

export default Projects;
