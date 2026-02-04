import React from "react";

function Hero({ scrollToSection }) {
	return (
		<section className="hero">
			<div className="container">
				{/* TODO Change the text headings and contents */}
				<h1 className="hero-title">Welcome to My Portfolio</h1>
				<p className="hero-subtitle">
					Building Scalable Web Apps with MERN & Cloud-Ready
					Architectures
				</p>
				<div className="cta-button-group">
					<button
						onClick={() => scrollToSection("profile")}
						className="cta-button cta-primary"
					>
						Explore My Work
					</button>
					<a
						href="/resume.pdf"
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
			</div>
		</section>
	);
}

export default Hero;
