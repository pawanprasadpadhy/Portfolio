import React from "react";

function Profile() {
	return (
		<section id="profile" className="section">
			<div className="container">
				<h2 className="section-title">Profile</h2>
				<div className="two-column-grid">
					<div className="card">
						<h3 className="card-title">About Me</h3>
						<p className="text-content">
							I'm Pawan Prasad Padhy, a dedicated developer who
							believes in writing clean, maintainable code and
							creating user-centric applications. My approach
							combines technical expertise with creative
							problem-solving to deliver exceptional digital
							experiences.
						</p>
						<p className="text-content">
							When I'm not coding, I enjoy exploring new
							technologies, contributing to open-source projects,
							and sharing knowledge with the developer community.
						</p>
					</div>
					<div className="card">
						<h3 className="card-title">Quick Facts</h3>
						<ul className="facts-list">
							<li className="fact-item">
								<span className="bullet">▹</span>
								<span>Full Stack MERN Developer</span>
							</li>
							<li className="fact-item">
								<span className="bullet">▹</span>
								<span>
									Passionate about clean code and best
									practices
								</span>
							</li>
							<li className="fact-item">
								<span className="bullet">▹</span>
								<span>Experience with Agile methodologies</span>
							</li>
							<li className="fact-item">
								<span className="bullet">▹</span>
								<span>Strong problem-solving skills</span>
							</li>
							<li className="fact-item">
								<span className="bullet">▹</span>
								<span>
									Continuous learner and tech enthusiast
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Profile;
