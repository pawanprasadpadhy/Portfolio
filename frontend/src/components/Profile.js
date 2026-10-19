import React from "react";
import {
	SiJavascript,
	SiReact,
	SiHtml5,
	SiCss,
	SiTailwindcss,
	SiRedux,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiGit,
	SiDocker,
	SiPostman,
	SiJira,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Profile() {
	// All skills combined for sliding animation with actual icons
	const allSkills = [
		{ name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
		{ name: "React", Icon: SiReact, color: "#61DAFB" },
		{ name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
		{ name: "CSS3", Icon: SiCss, color: "#1572B6" },
		{ name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
		{ name: "Redux", Icon: SiRedux, color: "#764ABC" },
		{ name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
		{ name: "Express.js", Icon: SiExpress, color: "#000000" },
		{ name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
		{ name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
		{ name: "Git", Icon: SiGit, color: "#F05032" },
		{ name: "Docker", Icon: SiDocker, color: "#2496ED" },
		{ name: "AWS", Icon: FaAws, color: "#FF9900" },
		{ name: "Postman", Icon: SiPostman, color: "#FF6C37" },
		{ name: "Jira", Icon: SiJira, color: "#0052CC" },
	];

	// Duplicate for seamless infinite scroll
	const duplicatedSkills = [...allSkills, ...allSkills];

	const quickFacts = [
		"Software Engineer at Recro (Client: Allen Digital)",
		"2 years building backend, automation and data systems",
		"Python, JavaScript, Django, FastAPI and Node.js",
		"AWS, MongoDB, ClickHouse, PostgreSQL and Airflow",
		"Observability with Grafana, Superset and Groundcover",
		"AWS and upGrad certified in data and analytics",
		"1000+ day DSA and coding practice streak",
	];

	return (
		<section id="profile" className="section">
			<div className="container">
				<h2 className="section-title">Profile</h2>
				<div className="two-column-grid">
					<div className="card">
						<h3 className="card-title">About Me</h3>
						<p className="text-content">
							I'm Pawan Prasad Padhy, a Software Engineer at
							Recro, working with Allen Digital on the systems
							behind high-scale online exams. I automate exam
							workflows, manage data across MongoDB, ClickHouse
							and S3, run Airflow pipelines and keep production
							healthy with Grafana and Groundcover on AWS.
						</p>
						<p className="text-content">
							Before that, at MountBlue Technologies, I built
							Python and LLM-powered automation agents like 'Rex'
							and 'Agent AutoTag'. Lately I've been growing into
							data analytics, working with SQL, Tableau and Power
							BI.
						</p>
					</div>
					<div className="card">
						<h3 className="card-title">Quick Facts</h3>
						<ul className="facts-list">
							{quickFacts.map((fact) => (
								<li key={fact} className="fact-item">
									<span className="bullet">▹</span>
									<span>{fact}</span>
								</li>
							))}
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
