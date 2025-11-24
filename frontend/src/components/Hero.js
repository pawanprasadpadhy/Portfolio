import React from "react";

function Hero({ scrollToSection }) {
	return (
		<section className="hero">
			<div className="container">
				{/* TODO Change the text headings and contents */}
				<h1 className="hero-title">Welcome to My Portfolio</h1>
				<p className="hero-subtitle">
					Full Stack Developer | MERN Specialist
				</p>
				<button
					onClick={() => scrollToSection("profile")}
					className="cta-button"
				>
					Explore My Work
				</button>
			</div>
		</section>
	);
}

export default Hero;
