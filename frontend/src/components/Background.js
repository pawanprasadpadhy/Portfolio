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
		{ name: "Jira", Icon: SiJira, color: "#0052CC" },
	];

	// Duplicate for seamless infinite scroll
	const duplicatedSkills = [...allSkills, ...allSkills];

	return (
		<section id="about" className="section section-alt">
			<div className="container">
				<h2 className="section-title">About Me</h2>
				<div className="card">
					<div className="about-content">
						<p className="text-content about-intro">
							I'm Pawan Prasad Padhy, a passionate Software
							Developer Engineer with expertise in Full Stack
							Development and a strong foundation in Python,
							JavaScript, and modern web technologies. My
							development experience centers around building
							high-performance, scalable applications using the
							MERN stack and Python frameworks.
						</p>
						<ul className="about-points">
							<li className="about-point">
								Developed <strong>'Rex'</strong>, a Python-based
								playwright automation agent that streamlined
								client document ordering from multiple external
								portals, reducing processing time by 65%.
							</li>
							<li className="about-point">
								Built <strong>'Agent AutoTag'</strong>, an
								LLM-powered agent with MySQL backend that
								auto-tags client-uploaded files, significantly
								reducing Human-in-the-Loop efforts by 94%.
							</li>
							<li className="about-point">
								Enhanced PostgreSQL database schemas
								implementing indexing strategies that boosted
								query performance by 40% and facilitated
								efficient data archiving.
							</li>
							<li className="about-point">
								Established monitoring solutions using Grafana,
								DataDog, and Sentry to track automation pipeline
								performance and system health across AI-driven
								workflows.
							</li>
							<li className="about-point">
								Created full-stack applications including a{" "}
								<strong>Trello Clone</strong> with complete CRUD
								operations, achieving 95% cross-browser
								compatibility, and an{" "}
								<strong>IMDB Clone</strong> using Django &
								PostgreSQL that enhanced user engagement by 20%.
							</li>
							<li className="about-point">
								Proficient in establishing CI/CD pipelines
								through GitHub Actions and testing RESTful API
								endpoints using Postman, reducing API-related
								bugs by 35%.
							</li>
						</ul>
						<p className="text-content about-outro">
							Outside of coding, I enjoy exploring new
							technologies, building automation tools, optimizing
							database performance, and contributing to
							open-source projects.
						</p>
					</div>

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
							"The best way to predict the future is to implement
							it." — David Heinemeier Hansson
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
