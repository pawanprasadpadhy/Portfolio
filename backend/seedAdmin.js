const mongoose = require("mongoose");
const dotenv = require("dotenv");
const readline = require("readline");
const User = require("./models/User");

dotenv.config();

const ADMIN_USERNAME = "admin";

// Read the password from ADMIN_PASSWORD, or ask for it so it never lands in
// the source code or shell history
const getPassword = () => {
	if (process.env.ADMIN_PASSWORD) {
		return Promise.resolve(process.env.ADMIN_PASSWORD);
	}
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) => {
		rl.question(`New password for "${ADMIN_USERNAME}": `, (answer) => {
			rl.close();
			resolve(answer);
		});
	});
};

// Creates the admin user, or resets its password if it already exists
const seedAdmin = async () => {
	try {
		const password = (await getPassword()).trim();
		if (password.length < 8) {
			console.error("Password must be at least 8 characters");
			process.exit(1);
		}

		await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected (${mongoose.connection.name})`);

		let user = await User.findOne({ username: ADMIN_USERNAME });

		if (user) {
			// Assigning and saving runs the pre-save hook, which hashes it
			user.password = password;
			await user.save();
			console.log(`Password reset for "${ADMIN_USERNAME}"`);
		} else {
			user = await User.create({ username: ADMIN_USERNAME, password });
			console.log(`Admin user created: ${user.username}`);
		}

		process.exit();
	} catch (error) {
		console.error("Error seeding admin:", error);
		process.exit(1);
	}
};

seedAdmin();
