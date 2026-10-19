import React from "react";

const heroStats = [
	{ value: "4 yrs", label: "Experience across software & civil engineering" },
	{ value: "20+", label: "Concurrent bot generations in Python asyncio" },
	{ value: "3", label: "Production data stores: MongoDB, ClickHouse, S3" },
	{ value: "1000+", label: "Day DSA & coding streak" },
];

const focusAreas = ["Python", "Go", "AWS", "Data Pipelines", "Observability", "Analytics"];

function Hero({ scrollToSection }) {
	return (
		<section className="hero">
			<div className="hero-glow" aria-hidden="true" />
			<div className="container hero-inner">
				<span className="hero-badge">
					<span className="hero-badge-dot" aria-hidden="true" />
					Software Engineer at Recro · Allen Digital
				</span>
				<h1 className="hero-title">
					Hi, I'm <span className="hero-name">Pawan Prasad Padhy</span>
				</h1>
				<p className="hero-subtitle">
					I build reliable backend systems, data pipelines and
					automation on AWS that keep high-scale exam platforms running.
				</p>
				<ul className="hero-tags">
					{focusAreas.map((area) => (
						<li key={area} className="hero-tag">
							{area}
						</li>
					))}
				</ul>
				<div className="cta-button-group">
					<button
						onClick={() => scrollToSection("experience")}
						className="cta-button cta-primary"
					>
						Explore My Work
					</button>
					<a
						href="/resume_v1.pdf"
						download
						className="cta-button cta-secondary"
					>
						Download Resume
					</a>
					<button
						onClick={() => scrollToSection("contact")}
						className="cta-button cta-secondary"
					>
						Contact Me
					</button>
				</div>
				<dl className="hero-stats">
					{heroStats.map((stat) => (
						<div key={stat.label} className="hero-stat">
							<dt className="hero-stat-label">{stat.label}</dt>
							<dd className="hero-stat-value">{stat.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}

export default Hero;
