import React from "react";
import { Menu, X, Download, Sun, Moon, Palette } from "lucide-react";

function Navbar({
	isMenuOpen,
	setIsMenuOpen,
	activeSection,
	scrollToSection,
	theme,
	toggleTheme,
	colorTheme,
	toggleColorTheme,
}) {
	return (
		<nav className="navbar">
			<div className="nav-container">
				<div className="nav-content">
					{/* Logo/Name */}
					<div className="nav-logo">Pawan Prasad Padhy</div>

					{/* Desktop Navigation */}
					<div className="nav-links-desktop">
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
							onClick={() => scrollToSection("education")}
							className={`nav-link ${
								activeSection === "education" ? "active" : ""
							}`}
						>
							Education
						</button>
						<button
							onClick={() => scrollToSection("certifications")}
							className={`nav-link ${
								activeSection === "certifications"
									? "active"
									: ""
							}`}
						>
							Certifications
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
							href="/resume_v1.pdf"
							download
							className="nav-link resume-link"
						>
							Resume <Download size={16} />
						</a>

						{/* Color Theme Toggle */}
						<button
							onClick={toggleColorTheme}
							className="nav-link theme-toggle"
							aria-label="Toggle color theme"
							title={`Switch to ${
								colorTheme === "emerald" ? "Purple" : "Emerald"
							} theme`}
						>
							<Palette
								size={20}
								color={
									colorTheme === "emerald"
										? "#10B981"
										: "#a855f7"
								}
							/>
						</button>

						{/* Theme Toggle */}
						<button
							onClick={toggleTheme}
							className="nav-link theme-toggle"
							aria-label="Toggle light/dark mode"
						>
							{theme === "dark" ? (
								<Sun size={20} />
							) : (
								<Moon size={20} />
							)}
						</button>

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
						onClick={() => scrollToSection("education")}
						className="mobile-nav-link"
					>
						Education
					</button>
					<button
						onClick={() => scrollToSection("certifications")}
						className="mobile-nav-link"
					>
						Certifications
					</button>
					<button
						onClick={() => scrollToSection("projects")}
						className="mobile-nav-link"
					>
						Projects
					</button>
					<a
						href="/resume_v1.pdf"
						download
						className="mobile-nav-link"
					>
						Resume
					</a>
					<button
						onClick={() => {
							toggleColorTheme();
							setIsMenuOpen(false);
						}}
						className="mobile-nav-link"
					>
						<Palette size={18} /> Switch Color Theme
					</button>
					<button
						onClick={() => {
							toggleTheme();
							setIsMenuOpen(false);
						}}
						className="mobile-nav-link theme-toggle-mobile"
					>
						{theme === "dark" ? (
							<>
								<Sun size={18} /> Light Mode
							</>
						) : (
							<>
								<Moon size={18} /> Dark Mode
							</>
						)}
					</button>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
