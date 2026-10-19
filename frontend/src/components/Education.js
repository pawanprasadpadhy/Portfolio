import React from "react";

function Education() {
	const education = [
		{
			period: "Nov 2022 – May 2024",
			institution: "Scaler",
			degree: "Specialized in Software Development & Problem Solving",
			details: [
				"Coursework: Python Programming, Data Structures & Algorithm, SQL, FullStack Development.",
				"Engineering Practices: Software Design & Documentation, Testing & Debugging, Cross-Functional Collaboration, Version Control (Git), Code Reviews, Mult-Platform Support (Linux/Unix, AWS, distributed databases).",
				"Sustained a 1000+ days of consistent DSA and coding practice streak, reflecting a strong commitment to continuous learning and skill enhancement along with problem-solving discipline and command over code CS fundamentals.",
			],
		},
		{
			period: "August 2015 – April 2019",
			institution:
				"National Institute of Science & Technology, Berhampur, Odisha",
			degree: "Bachelor of Technology (B.Tech) in Civil Engineering",
			details: [],
		},
	];

	return (
		<section id="education" className="section">
			<div className="container">
				<h2 className="section-title">Education</h2>
				<p className="section-intro">
					My educational journey has equipped me with a strong
					foundation in software development and engineering
					principles.
				</p>
				<div className="education-list">
					{education.map((edu, index) => (
						<div key={index} className="education-card">
							<div className="education-period">{edu.period}</div>
							<div className="education-content">
								<h3 className="education-institution">
									{edu.institution}
								</h3>
								<p className="education-degree">{edu.degree}</p>
								{edu.details.length > 0 && (
									<ul className="experience-points education-details">
										{edu.details.map((point, idx) => (
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
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Education;
