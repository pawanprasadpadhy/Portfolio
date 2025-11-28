import React from "react";

function Projects() {
	return (
		<section id="projects" className="section">
			<div className="container">
				<h2 className="section-title">Projects</h2>
				<div className="projects-grid">
					{[
						{
							title: "BookMyShow Clone",
							description:
								"Created a clone of BookMyShow using HTML5, CSS3, and Vanilla JavaScript.",
							tech: [
								"HTML5",
								"CSS3",
								"Vanilla JavaScript",
								"Trello REST API",
							],
						},
						{
							title: "Trello Clone Application",
							description:
								"Fully functional Trello clone supporting complete CRUD operations for boards, lists, cards and checklists.",
							tech: [
								"HTML5",
								"CSS3",
								"Vanilla JavaScript",
								"Trello REST API",
							],
						},
						{
							title: "IMDB Clone",
							description:
								"Comprehensive full-stack IMDB clone using Django and PostgreSQL, integrating IMDB API for real-time trending movies.",
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
						{
							title: "Spotify Clone",
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
