import React from "react";

function Experience() {
	// "Implemented student leaderboard feature with dynamic sorting logic supporting multiple filters including marks by subject, time taken, correct questions, and overall marks scored, enhancing competitive learning experience and performance tracking.",
	const experiences = [
		{
			period: "Nov 2025 – Present",
			company: "Recro",
			client: "Allen Digital",
			role: "Software Engineer",
			points: [
				"Automated exam state transition workflows and debugged test IDs stuck in various states, reducing manual intervention and improving exam delivery reliability for students.",
				"Managed multi-database infrastructure including MongoDB (EC2 and Atlas), ClickHouse for analytics, and S3 for storage, performing real-time data updates and optimizations to support exam operations.",
				"Developed and maintained observability dashboards using Grafana and Superset to monitor exam state transitions, system performance metrics, and operational health across the testing platform.",
				"Engineered exam creation pipeline by converting question paper PDFs to HTML content, importing paper codes, and managing question bank queries with subject-specific question ID mapping.",
				"Implemented logging and monitoring solutions using Groundcover for debugging production issues, enabling faster resolution of student-facing problems and system bottlenecks.",
				"Provided technical support for student-end issues during live exams, ensuring minimal disruption to the examination process through rapid troubleshooting and data corrections.",
			],
		},
		{
			period: "Nov 2024 – Nov 2025",
			company: "MountBlue Technologies Pvt. Ltd.",
			role: "Software Developer Engineer",
			points: [
				"Acquired hands-on experience with Python, JavaScript, Django, REST APIs, CLI Tools, Git, HTML and CSS while contributing to various projects throughout the development cycle.",
				"Enhanced PostgreSQL database schemas for the storage and retrieval of document metadata, implementing indexing strategies that boosted query performance by 40% and facilitated efficient data archiving to meet compliance requirements.",
				"Developed and tested web applications, APIs and automation scripts using Django and FastAPI, refining both backend and frontend development skills while establishing CI/CD pipelines through GitHub Actions.",
				"Developed 'Rex', a Python-based playwright automation agent to streamline client document ordering from multiple external portals (Community Archives, Homewise, Ciranet), eliminating repetitive manual process and reducing processing time by 65%.",
				"Designed and implemented an 'Ambiguity Process' module within Rex for managing document states and handling end-to-end workflows for specific addresses, automatically retrieving all the necessary documents along with delivery dates and pricing informations.",
				"Built 'Agent AutoTag', an LLM-powered agent with MySQL backend that auto-tags client-uploaded files based on predefined prompts, keywords and definitions, significantly reducing the HIL efforts by 94%.",
				"Integrated OCR outputs with AutoTag using MySQL databases for unstructured data storage, enabling automated background tagging of hundreds of documents, minimizing the HIL interventions and enhancing processing efficiency.",
				"Established monitoring and observability solutions using Grafana, DataDog and Sentry to track automation pipeline performance, document processing metrics and system health across AI-driven workflows.",
				"Tested and validated RESTful API endpoints using Postman, creating comprehensive through test collections for 'Rex' and 'AutoTag' services, which reduced API-related bugs by 35% and ensured robust error handling across all endpoints.",
			],
		},
	];

	return (
		<section id="experience" className="section section-alt">
			<div className="container">
				<h2 className="section-title">Experience</h2>
				<p className="section-intro">
					My professional journey showcasing impactful contributions
					to software development and automation.
				</p>
				<div className="experience-list">
					{experiences.map((exp, index) => (
						<div key={index} className="experience-card">
							<div className="experience-period">
								{exp.period}
							</div>
							<div className="experience-content">
								<h3 className="experience-company">
									{exp.company}
									{exp.client ? ` (${exp.client})` : ""}
								</h3>
								<p className="experience-role">{exp.role}</p>
								<ul className="experience-points">
									{exp.points.map((point, idx) => (
										<li
											key={idx}
											className="experience-point"
										>
											<span className="bullet-icon">
												•
											</span>
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
