import React, { useState, useEffect } from "react";
import AppLayout from "./AppLayout";
import "./App.css";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("background");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formStatus, setFormStatus] = useState(""); // '', 'sending', 'success', 'error'

	// Track active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"background",
				"profile",
				"experience",
				"projects",
			];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Smooth scroll to section
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	// Handle form input changes
	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormStatus("sending");

		try {
			const response = await fetch("http://localhost:5000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok && data.success) {
				setFormStatus("success");
				setFormData({ name: "", email: "", message: "" });
				setTimeout(() => setFormStatus(""), 5000);
			} else {
				setFormStatus("error");
				setTimeout(() => setFormStatus(""), 5000);
			}
		} catch (error) {
			console.error("Error:", error);
			setFormStatus("error");
			setTimeout(() => setFormStatus(""), 5000);
		}
	};

	return (
		<AppLayout
			isMenuOpen={isMenuOpen}
			setIsMenuOpen={setIsMenuOpen}
			activeSection={activeSection}
			scrollToSection={scrollToSection}
			formData={formData}
			handleInputChange={handleInputChange}
			handleSubmit={handleSubmit}
			formStatus={formStatus}
		/>
	);
}

export default App;
