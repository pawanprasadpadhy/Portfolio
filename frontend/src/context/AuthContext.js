import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Check if user is logged in
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = async (username, password) => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			const data = await response.json();

			if (response.ok) {
				setUser(data);
				localStorage.setItem("user", JSON.stringify(data));
				return { success: true };
			} else {
				return { success: false, error: data.error };
			}
		} catch (error) {
			console.error("Login error:", error);
			return { success: false, error: "Server error" };
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
