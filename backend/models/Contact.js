const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Please provide an email"],
			trim: true,
			lowercase: true,
		},
		message: {
			type: String,
			required: [true, "Please provide a message"],
		},
		isRead: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

module.exports =
	mongoose.models.Contact || mongoose.model("Contact", contactSchema);
