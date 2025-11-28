import React from "react";
import {
	SiJavascript,
	SiReact,
	SiHtml5,
	SiCss3,
	SiTailwindcss,
	SiRedux,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiGit,
	SiDocker,
	SiAmazonwebservices,
	SiPostman,
	// SiVisualstudio,
	SiJira,
} from "react-icons/si";

function Background() {
	// All skills combined for sliding animation with actual icons
	const allSkills = [
		{ name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
		{ name: "React", Icon: SiReact, color: "#61DAFB" },
		{ name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
		{ name: "CSS3", Icon: SiCss3, color: "#1572B6" },
		{ name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
		{ name: "Redux", Icon: SiRedux, color: "#764ABC" },
		{ name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
		{ name: "Express.js", Icon: SiExpress, color: "#000000" },
		{ name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
		{ name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
		{ name: "Git", Icon: SiGit, color: "#F05032" },
		{ name: "Docker", Icon: SiDocker, color: "#2496ED" },
		{ name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
		{ name: "Postman", Icon: SiPostman, color: "#FF6C37" },
		// { name: "VS Code", Icon: SiVisualstudio, color: "#007ACC" },
		{ name: "Jira", Icon: SiJira, color: "#0052CC" },
	];

	// Duplicate for seamless infinite scroll
	const duplicatedSkills = [...allSkills, ...allSkills];

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

					{/* Original Skills Grid */}
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

					{/* Skills Sliding Animation with Logos */}
					<div className="skills-section">
						<h3 className="skills-heading">My Skills</h3>
						<p className="skills-quote">
							"Programs must be written for people to read, and
							only incidentally for machines to execute." — Harold
							Abelson
						</p>

						<div className="skills-slider-container">
							<div className="skills-slider">
								{duplicatedSkills.map((skill, index) => {
									const Icon = skill.Icon;
									return (
										<div key={index} className="skill-item">
											<div className="skill-icon-circle">
												<Icon
													className="skill-icon"
													style={{
														color: skill.color,
													}}
													size={40}
												/>
											</div>
											<span className="skill-name">
												{skill.name}
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Background;
