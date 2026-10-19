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
				"Automated exam state transition workflows and resolved exam IDs stuck across multiple failure states, reducing manual intervention required for exam delivery operations.",
				"Debugged and resolved issues in existing Go services, gaining working proficiency in a statically-typed, concurrent-first language alongside Python.",
				"Managed multi-database infrastructure spanning MongoDB (EC2-hosted and Atlas), ClickHouse, and S3, performing real-time data updates across three systems to support high-scale exam operations.",
				"Managed and deployed application configurations across AWS environments, standardizing setup for consistent, repeatable exam infrastructure deployments.",
				"Built and maintained observability dashboards across Grafana and Superset, monitoring exam state transitions and system performance metrics in real time.",
				"Architected a dual-pipeline system using Python asyncio, concurrently processing 20+ bot solution generations and LaTeX-to-image conversions for thousands of educational questions with automatic retry on failure.",
				"Contributed to and maintained backend services across multiple Go repositories, diagnosing and fixing bugs alongside ongoing Python-based development work.",
				"Developed and deployed automation scripts on AWS EC2, configuring recurring cron jobs to schedule operational and data-processing workflows.",
				"Engineered an exam creation pipeline converting question paper PDFs to HTML, importing question paper codes and mapping subject-specific question IDs to streamline question bank management.",
				"Designed and maintained Airflow DAGs orchestrating data ingestion and processing workflows across the exam pipeline, improving monitoring and pipeline reliability.",
				"Configured Grafana dashboards and alerting rules to track system performance and surface operational issues in real time.",
				"Implemented logging and monitoring solutions using Groundcover to debug production issues, accelerating root-cause identification for student-facing incidents.",
			],
		},
		{
			period: "Nov 2024 – Nov 2025",
			company: "MountBlue Technologies Pvt. Ltd.",
			role: "Software Development Engineer",
			points: [
				"Designed normalized PostgreSQL schemas and indexing strategies for document metadata storage, applying database optimization principles to improve query performance and support compliance-driven data archiving.",
				"Developed and tested web applications, REST APIs, and automation scripts using Django and FastAPI, establishing CI/CD pipelines with GitHub Actions across multiple repositories.",
				"Built 'Rex', a Python-based Playwright automation agent to order client documents across three external portals (Community Archives, Homewise, Ciranet), eliminating manual, repetitive ordering workflows.",
				"Designed an 'Ambiguity Process' module within Rex to manage document states end-to-end for address-specific cases, automatically retrieving documents alongside delivery dates and pricing.",
				"Built 'Agent AutoTag', an LLM-powered generative AI agent with a MySQL backend, auto-tagging client-uploaded documents against pre-defined prompts, keywords, and definitions to reduce manual classification effort.",
				"Developed and deployed generative AI models into production workflows using prompt engineering, tool-calling, and retrieval-augmented generation (RAG) techniques to automate document classification and business processes.",
				"Built and maintained CI/CD pipelines using GitHub Actions, automating testing, deployment, and code quality checks across multiple repositories.",
				"Integrated OCR output with AutoTag via MySQL for unstructured data storage, enabling automated background tagging of hundreds of client documents through Celery with minimal manual review.",
				"Tested and validated RESTful API endpoints using Postman, building comprehensive test collections for the Rex and AutoTag services to strengthen error handling coverage.",
				"Wrote clean, maintainable code with structured logging and documentation across the AutoTag and Rex pipelines, supporting long-term maintainability and handover.",
			],
		},
		{
			period: "Feb 2022 – Sep 2022",
			company: "Grasim Industries Pvt. Ltd.",
			role: "Civil Project Engineer",
			points: [
				"Executed construction projects, including a WTP Clarifier, Flocculation & Sludge Tank, ensuring successful completion within specified timelines.",
				"Efficiently managed manpower and materials, optimizing resource allocation for maintenance tasks, resulting in a 15% increase in work efficiency.",
				"Utilized AutoCAD to create precise drawings for construction projects and structures such as buildings and temples at the staff colony, enhancing project accuracy by 20%.",
				"Meticulously reviewed plans, drawings, and quantities, achieving a 98% accuracy rate in calculations, thus reducing rework and material waste.",
				"Generated Bar Bending Schedules, meeting construction project needs and contributing to a 10% improvement in project timelines and cost control.",
			],
		},
		{
			period: "Jul 2019 – Oct 2021",
			company: "Er. Surendra Kumar Panigrahi (A Class Contractor)",
			role: "Civil Site Engineer",
			points: [
				"Surveyed and established precise levels for construction work, ensuring site accuracy and reducing errors by 20%.",
				"Provided expert technical guidance, resolving on-site challenges promptly, resulting in a 15% reduction in project delays.",
				"Enforced stringent quality standards and safety measures, aligning with project drawings, and maintained a 98% compliance rate, enhancing overall project safety and quality.",
				"Analyzed construction issues strategically and proposed effective corrective measures, reducing project setbacks by 25%.",
				"Managed daily site operations, overseeing and optimizing labor efficiency, leading to a 10% improvement in work progress.",
				"Supervised material selection and procurement, ensuring availability of necessary materials and tools to prevent shortages, resulting in a 15% reduction in project downtime.",
			],
		},
	];

	return (
		<section id="experience" className="section section-alt">
			<div className="container">
				<h2 className="section-title">Experience</h2>
				<p className="section-intro">
					From managing construction sites as a civil engineer to
					building automation, data and observability systems as a
					software engineer.
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
