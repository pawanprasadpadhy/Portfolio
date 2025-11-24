import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Lock, User } from "lucide-react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		const result = await login(username, password);
		if (result.success) {
			navigate("/admin");
		} else {
			setError(result.error);
		}
	};

	return (
		<div className="login-container">
			<div className="login-card">
				<h2 className="login-title">Admin Login</h2>
				{error && <div className="error-message">{error}</div>}
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label className="form-label">Username</label>
						<div className="input-icon-wrapper">
							<User size={20} className="input-icon" />
							<input
								type="text"
								className="form-input with-icon"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="form-label">Password</label>
						<div className="input-icon-wrapper">
							<Lock size={20} className="input-icon" />
							<input
								type="password"
								className="form-input with-icon"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
					</div>
					<button type="submit" className="submit-button">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
