const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const seedAdmin = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("MongoDB Connected");

		// Check if admin exists
		const adminExists = await User.findOne({ username: "admin" });

		if (adminExists) {
			console.log("Admin user already exists");
			process.exit();
		}

		// Create admin user
		const user = await User.create({
			username: "admin",
			password: "adminpassword123", // User should change this!
		});

		console.log("Admin user created:", user.username);
		process.exit();
	} catch (error) {
		console.error("Error seeding admin:", error);
		process.exit(1);
	}
};

seedAdmin();
