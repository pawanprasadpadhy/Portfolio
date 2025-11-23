import React from "react";

function Experience() {
	return (
		<section id="experience" className="section section-alt">
			<div className="container">
				<h2 className="section-title">Experience</h2>
				<div className="experience-list">
					<div className="experience-card purple-border">
						<div className="experience-header">
							<div>
								<h3 className="experience-title">
									Software Developer Engineer
								</h3>
								<p className="experience-company">
									MountBlue Technologies Pvt. Ltd.
								</p>
							</div>
							<span className="experience-date">
								Nov 2024 - Nov 2025
							</span>
						</div>
						<ul className="experience-points">
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Acquired hands-on experience with Python,
									JavaScript, Django, REST APIs, CLI Tools,
									Git, HTML and CSS while contributing to
									various projects throughout the development
									cycle.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Enhanced PostgreSQL database schemas for the
									storage and retrieval of document metadata,
									implementing indexing strategies that
									boosted query performance by 40% and
									facilitated efficient data archiving to meet
									compliance requirements.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Developed and tested web applications, APIs
									and automation scripts using Django and
									FastAPI, refining both backend and frontend
									development skills while establishing CI/CD
									pipelines through GitHub Actions.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Developed 'Rex', a Python-based playwright
									automation agent to streamline client
									document ordering from multiple external
									portals (Community Archives, Homewise,
									Ciranet), eliminating repetitive manual
									process and reducing processing time by 65%.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Designed and implemented an 'Ambiguity
									Process' module within Rex for managing
									document states and handling end-to-end
									workflows for specific addresses,
									automatically retrieving all the necessary
									documents along with delivery dates and
									pricing informations.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Built 'Agent AutoTag', an LLM-powered agent
									with MySQL backend that auto-tags
									client-uploaded files based on predefined
									prompts, keywords and definitions,
									significantly reducing the HIL efforts by
									94%.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Integrated OCR outputs with AutoTag using
									MySQL databases for unstructured data
									storage, enabling automated background
									tagging of hundreds of documents, minimizing
									the HIL interventions and enhancing
									processing efficiency.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Established monitoring and observability
									solutions using Grafana, DataDog and Sentry
									to track automation pipeline performance,
									document processing metrics and system
									health across AI-driven workflows.
								</span>
							</li>
							<li className="experience-point">
								<span className="bullet-purple">•</span>
								<span>
									Tested and validated RESTful API endpoints
									using Postman, creating comprehensive
									through test collections for 'Rex' and
									'AutoTag' services, which reduced
									API-related bugs by 35% and ensured robust
									error handling across all endpoints.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
