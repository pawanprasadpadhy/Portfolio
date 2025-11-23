import React from "react";

function Background() {
	return (
		<section id="background" className="section section-alt">
			<div className="container">
				<h2 className="section-title">Background</h2>
				<div className="card">
					<p className="text-content">
						I'm a passionate Full Stack Developer specializing in
						the MERN stack (MongoDB, Express.js, React, Node.js).
						With a strong foundation in both frontend and backend
						technologies, I create scalable and efficient web
						applications.
					</p>
					<p className="text-content">
						My journey in web development started with a curiosity
						about how things work on the internet. Over time, this
						curiosity transformed into a professional career where
						I've had the opportunity to work on diverse projects
						ranging from e-commerce platforms to real-time data
						applications.
					</p>
					<div className="skills-grid">
						<div className="skill-card">
							<h3 className="skill-title">Frontend</h3>
							<p className="skill-text">
								React, JavaScript, HTML5, CSS3, Tailwind CSS,
								Redux
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
	);
}

export default Background;
