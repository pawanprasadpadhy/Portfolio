import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AppLayout({
	isMenuOpen,
	setIsMenuOpen,
	activeSection,
	scrollToSection,
	formData,
	handleInputChange,
	handleSubmit,
	formStatus,
	theme,
	toggleTheme,
}) {
	return (
		<div className="app">
			<Navbar
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				activeSection={activeSection}
				scrollToSection={scrollToSection}
				theme={theme}
				toggleTheme={toggleTheme}
			/>
			<Hero scrollToSection={scrollToSection} />
			<Background />
			<Profile />
			<Experience />
			<Projects />
			<Contact
				formData={formData}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				formStatus={formStatus}
			/>
			<Footer scrollToSection={scrollToSection} />
		</div>
	);
}

export default AppLayout;
