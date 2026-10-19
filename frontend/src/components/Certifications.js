import React from "react";
import { FaAws } from "react-icons/fa";
import upgradLogo from "../assets/upgrad-logo.svg";

const issuerLogos = {
	AWS: FaAws,
};

const issuerLogoImages = {
	upGrad: upgradLogo,
};

function Certifications() {
	const certifications = [
		{
			name: "Data Engineering on AWS – Foundations",
			issuer: "AWS",
		},
		{
			name: "Foundations of Prompt Engineering",
			issuer: "AWS",
		},
		{
			name: "Fundamentals of Data Analytics",
			issuer: "AWS",
		},
		{
			name: "Tableau Basics",
			issuer: "upGrad",
		},
	];

	return (
		<section id="certifications" className="section section-alt">
			<div className="container">
				<h2 className="section-title">Certifications</h2>
				<p className="section-intro">
					Professional certifications validating expertise in cloud
					data engineering, analytics, and AI.
				</p>
				<div className="education-list">
					{certifications.map((cert, index) => {
						const IssuerLogo = issuerLogos[cert.issuer];
						const issuerLogoImage = issuerLogoImages[cert.issuer];
						return (
							<div
								key={index}
								className="education-card certification-card"
							>
								<div className="education-period certification-issuer">
									{IssuerLogo ? (
										<IssuerLogo
											className="certification-logo"
											title={cert.issuer}
											aria-label={cert.issuer}
										/>
									) : issuerLogoImage ? (
										<img
											src={issuerLogoImage}
											className="certification-logo certification-logo-img"
											alt={cert.issuer}
											title={cert.issuer}
										/>
									) : (
										cert.issuer
									)}
								</div>
								<div className="education-content">
									<h3 className="education-institution">
										{cert.name}
									</h3>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Certifications;
