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

function Profile() {
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
		<section id="profile" className="section">
			<div className="container">
				<h2 className="section-title">Profile</h2>
				<div className="two-column-grid">
					<div className="card">
						<h3 className="card-title">About Me</h3>
						<p className="text-content">
							I'm Pawan Prasad Padhy, a dedicated developer who
							believes in writing clean, maintainable code and
							creating user-centric applications. My approach
							combines technical expertise with creative
							problem-solving to deliver exceptional digital
							experiences.
						</p>
						<p className="text-content">
							When I'm not coding, I enjoy exploring new
							technologies, contributing to open-source projects,
							and sharing knowledge with the developer community.
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
								<span>Experience with Agile methodologies</span>
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

				{/* Skills Sliding Animation with Logos */}
				<div className="skills-section">
					<h3 className="skills-heading">My Skills</h3>
					<p className="skills-quote">
						"The best way to predict the future is to implement it."
						— David Heinemeier Hansson
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
		</section>
	);
}

export default Profile;
