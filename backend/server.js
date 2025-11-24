// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Initialize Express app
const app = express();

// == MIDDLEWARE ==
// CORS - Allows frontend to communicate with backend
app.use(
	cors({
		origin: "http://localhost:3000", // Frontend URL
		credentials: true,
	})
);

// Parse JSON data from requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// == DATABASE CONNECTION ==
const MONGODB_URI =
	process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("✅ MongoDB Connected Successfully!");
		console.log(`📊 Database: ${mongoose.connection.name}`);
	})
	.catch((err) => {
		console.error("❌ MongoDB Connection Error:", err.message);
		process.exit(1);
	});

// == DATABASE SCHEMA & MODEL ==
// Define how contact data should be structured
const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
	},
	message: {
		type: String,
		required: [true, "Message is required"],
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: String,
		enum: ["unread", "read"],
		default: "unread",
	},
});

// Create Contact model from schema
const Contact = mongoose.model("Contact", contactSchema);

// == API ROUTES ==
// Test route - Check if server is running
app.get("/", (req, res) => {
	res.json({
		message: "🚀 Portfolio Backend API is running!",
		status: "active",
		timestamp: new Date().toISOString(),
	});
});

const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");

// Routes
app.use("/api/auth", authRoutes);

// POST /api/contact - Submit contact form (Public)
app.post("/api/contact", async (req, res) => {
	try {
		console.log("📨 Received contact form submission:", req.body);

		const { name, email, message } = req.body;

		// Validate input
		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				error: "All fields are required",
			});
		}

		// Create new contact entry
		const newContact = new Contact({
			name,
			email,
			message,
		});

		// Save to database
		const savedContact = await newContact.save();

		console.log("✅ Contact saved to database:", savedContact._id);

		// Send email notification
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: "beingpawanppp@gmail.com",
			subject: `New Contact Form Submission from ${name}`,
			html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		};

		try {
			await transporter.sendMail(mailOptions);
			console.log("📧 Email notification sent successfully!");
		} catch (emailError) {
			console.error("❌ Error sending email:", emailError);
			// Don't fail the request if email fails, just log it
		}

		res.status(201).json({
			success: true,
			message: "Message sent successfully!",
			data: savedContact,
		});
	} catch (error) {
		console.error("❌ Error saving contact:", error);
		res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
});

// GET /api/contacts - Get all contacts (Protected)
app.get("/api/contacts", protect, async (req, res) => {
	try {
		const contacts = await Contact.find().sort({ createdAt: -1 });
		res.status(200).json({
			success: true,
			count: contacts.length,
			data: contacts,
		});
	} catch (error) {
		console.error("❌ Error fetching contacts:", error);
		res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
});

// GET /api/contacts/:id - Get single contact by ID
app.get("/api/contacts/:id", async (req, res) => {
	try {
		const contact = await Contact.findById(req.params.id);

		if (!contact) {
			return res.status(404).json({
				success: false,
				error: "Contact not found",
			});
		}

		res.json({
			success: true,
			data: contact,
		});
	} catch (error) {
		console.error("❌ Error fetching contact:", error);
		res.status(500).json({
			success: false,
			error: "Failed to fetch contact",
		});
	}
});

// DELETE /api/contacts/:id - Delete a contact message
app.delete("/api/contacts/:id", protect, async (req, res) => {
	try {
		const contact = await Contact.findByIdAndDelete(req.params.id);

		if (!contact) {
			return res.status(404).json({
				success: false,
				error: "Contact not found",
			});
		}

		res.json({
			success: true,
			message: "Contact deleted successfully",
		});
	} catch (error) {
		console.error("❌ Error deleting contact:", error);
		res.status(500).json({
			success: false,
			error: "Failed to delete contact",
		});
	}
});

// Handle 404 - Route not found
app.use((req, res) => {
	res.status(404).json({
		success: false,
		error: "Route not found",
	});
});

// == SERVER CONFIGURATION ==
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("\n🎉 ================================");
	console.log(`🚀 Server is running on port ${PORT}`);
	console.log(`📍 Local: http://localhost:${PORT}`);
	console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
	console.log("🎉 ================================\n");
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
	console.error("❌ Unhandled Promise Rejection:", err);
	// Close server & exit process
	process.exit(1);
});
