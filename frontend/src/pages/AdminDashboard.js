import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Trash2, LogOut, Mail } from "lucide-react";

const AdminDashboard = () => {
	const [contacts, setContacts] = useState([]);
	const { user, logout } = useContext(AuthContext);

	useEffect(() => {
		fetchContacts();
	}, []);

	const fetchContacts = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/contacts", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const data = await response.json();
			if (data.success) {
				setContacts(data.data);
			}
		} catch (error) {
			console.error("Error fetching contacts:", error);
		}
	};

	const handleDelete = async (id) => {
		if (window.confirm("Are you sure you want to delete this message?")) {
			try {
				const response = await fetch(
					`http://localhost:5000/api/contacts/${id}`,
					{
						method: "DELETE",
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					}
				);
				if (response.ok) {
					setContacts(contacts.filter((contact) => contact._id !== id));
				}
			} catch (error) {
				console.error("Error deleting contact:", error);
			}
		}
	};

	return (
		<div className="admin-dashboard">
			<header className="admin-header">
				<h1 className="admin-title">Admin Dashboard</h1>
				<button onClick={logout} className="logout-button">
					<LogOut size={20} /> Logout
				</button>
			</header>

			<div className="container">
				<h2 className="section-title">Contact Messages</h2>
				<div className="contacts-list">
					{contacts.length === 0 ? (
						<p className="no-contacts">No messages found.</p>
					) : (
						contacts.map((contact) => (
							<div key={contact._id} className="contact-card">
								<div className="contact-header">
									<h3 className="contact-name">{contact.name}</h3>
									<span className="contact-date">
										{new Date(contact.createdAt).toLocaleDateString()}
									</span>
								</div>
								<div className="contact-email">
									<Mail size={16} /> {contact.email}
								</div>
								<p className="contact-message">{contact.message}</p>
								<button
									onClick={() => handleDelete(contact._id)}
									className="delete-button"
								>
									<Trash2 size={18} /> Delete
								</button>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
