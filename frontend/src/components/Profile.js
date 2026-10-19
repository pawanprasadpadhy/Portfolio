import React from "react";
import {
	SiPython,
	SiGo,
	SiJavascript,
	SiDjango,
	SiFastapi,
	SiNodedotjs,
	SiExpress,
	SiReact,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiClickhouse,
	SiApacheairflow,
	SiCelery,
	SiGrafana,
	SiApachesuperset,
	SiGithubactions,
	SiLinux,
	SiPostman,
	SiPandas,
	SiNumpy,
	SiTensorflow,
	SiAutocad,
	SiHtml5,
	SiCss,
	SiTailwindcss,
	SiRedux,
	SiGit,
	SiDocker,
	SiJira,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

function Profile() {
	// All skills combined for sliding animation with actual icons
	const allSkills = [
		{ name: "Python", Icon: SiPython, color: "#3776AB" },
		{ name: "Go", Icon: SiGo, color: "#00ADD8" },
		{ name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
		{ name: "Django", Icon: SiDjango, color: "#44B78B" },
		{ name: "FastAPI", Icon: SiFastapi, color: "#009688" },
		{ name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
		{ name: "Express.js", Icon: SiExpress, color: "#888888" },
		{ name: "REST API", Icon: TbApi, color: "#10B981" },
		{ name: "React", Icon: SiReact, color: "#61DAFB" },
		{ name: "Redux", Icon: SiRedux, color: "#764ABC" },
		{ name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
		{ name: "CSS3", Icon: SiCss, color: "#1572B6" },
		{ name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
		{ name: "AWS", Icon: FaAws, color: "#FF9900" },
		{ name: "Docker", Icon: SiDocker, color: "#2496ED" },
		{ name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
		{ name: "MySQL", Icon: SiMysql, color: "#4479A1" },
		{ name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
		{ name: "ClickHouse", Icon: SiClickhouse, color: "#FFCC01" },
		{ name: "Airflow", Icon: SiApacheairflow, color: "#017CEE" },
		{ name: "Celery", Icon: SiCelery, color: "#37814A" },
		{ name: "Grafana", Icon: SiGrafana, color: "#F46800" },
		{ name: "Superset", Icon: SiApachesuperset, color: "#20A6C9" },
		{ name: "Git", Icon: SiGit, color: "#F05032" },
		{ name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
		{ name: "Linux", Icon: SiLinux, color: "#FCC624" },
		{ name: "Postman", Icon: SiPostman, color: "#FF6C37" },
		{ name: "Jira", Icon: SiJira, color: "#0052CC" },
		{ name: "Pandas", Icon: SiPandas, color: "#E70488" },
		{ name: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
		{ name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
		{ name: "AutoCAD", Icon: SiAutocad, color: "#E51050" },
	];

	// Duplicate for seamless infinite scroll
	const duplicatedSkills = [...allSkills, ...allSkills];

	const quickFacts = [
		"Software Engineer at Recro (Client: Allen Digital)",
		"4 years of experience across software and civil engineering",
		"Python, Go, JavaScript, Django, FastAPI and Node.js",
		"AWS, MongoDB, ClickHouse, PostgreSQL and Airflow",
		"Observability with Grafana, Superset and Groundcover",
		"B.Tech in Civil Engineering, with site and project experience",
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
							healthy with Grafana and Groundcover on AWS, working
							across both Python and Go services.
						</p>
						<p className="text-content">
							Before that, at MountBlue Technologies, I built
							Python and generative AI automation agents like
							'Rex' and 'Agent AutoTag'. I started my career as a
							civil engineer, running construction sites and
							projects at Grasim Industries. That's where I
							learned to plan carefully, check the numbers and
							deliver on schedule, habits I now bring to software.
							Lately I've also been growing into data analytics
							with SQL, Tableau and Power BI.
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
