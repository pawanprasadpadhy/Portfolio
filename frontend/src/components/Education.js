import React from "react";

function Education() {
	const education = [
		{
			period: "Nov 2022 – May 2024",
			institution: "Scaler",
			degree: "Specialized in Software Development & Problem Solving",
			details:
				"Coursework: Python Programming, Data Structures & Algorithm, SQL, FullStack Development",
		},
		{
			period: "August 2015 – April 2019",
			institution:
				"National Institute of Science & Technology, Berhampur, Odisha",
			degree: "Bachelor of Technology (B.Tech) in Civil Engineering",
			details: "",
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
								{edu.details && (
									<p className="education-details">
										{edu.details}
									</p>
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
