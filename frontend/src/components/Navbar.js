import React from "react";
import { Menu, X, Download } from "lucide-react";

function Navbar({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) {
	return (
		<nav className="navbar">
			<div className="nav-container">
				<div className="nav-content">
					{/* Logo/Name */}
					<div className="nav-logo">Pawan Prasad Padhy</div>

					{/* Desktop Navigation */}
					<div className="nav-links-desktop">
						<button
							onClick={() => scrollToSection("background")}
							className={`nav-link ${
								activeSection === "background" ? "active" : ""
							}`}
						>
							Background
						</button>
						<button
							onClick={() => scrollToSection("profile")}
							className={`nav-link ${
								activeSection === "profile" ? "active" : ""
							}`}
						>
							Profile
						</button>
						<button
							onClick={() => scrollToSection("experience")}
							className={`nav-link ${
								activeSection === "experience" ? "active" : ""
							}`}
						>
							Experience
						</button>
						<button
							onClick={() => scrollToSection("projects")}
							className={`nav-link ${
								activeSection === "projects" ? "active" : ""
							}`}
						>
							Projects
						</button>
						<a
							href="/resume.pdf"
							download
							className="nav-link resume-link"
						>
							Resume <Download size={16} />
						</a>
						<div className="profile-icon">PP</div>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="mobile-menu-btn"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="nav-links-mobile">
					<button
						onClick={() => scrollToSection("background")}
						className="mobile-nav-link"
					>
						Background
					</button>
					<button
						onClick={() => scrollToSection("profile")}
						className="mobile-nav-link"
					>
						Profile
					</button>
					<button
						onClick={() => scrollToSection("experience")}
						className="mobile-nav-link"
					>
						Experience
					</button>
					<button
						onClick={() => scrollToSection("projects")}
						className="mobile-nav-link"
					>
						Projects
					</button>
					<a
						href="/resume.pdf"
						download
						className="mobile-nav-link"
					>
						Resume
					</a>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
