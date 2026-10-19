const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");

// The endpoint is public, so limit how many emails it can trigger:
// one per visitor IP every 10 minutes, and at most 50 per day overall
const PER_IP_WINDOW_MS = 10 * 60 * 1000;
const DAILY_LIMIT = 50;
const lastSentByIp = new Map();
let dailyCount = 0;
let dailyCountDate = new Date().toDateString();

const isRateLimited = (ip) => {
	const now = Date.now();
	const today = new Date().toDateString();
	if (today !== dailyCountDate) {
		dailyCountDate = today;
		dailyCount = 0;
		lastSentByIp.clear();
	}
	if (dailyCount >= DAILY_LIMIT) return true;
	const last = lastSentByIp.get(ip);
	if (last && now - last < PER_IP_WINDOW_MS) return true;
	lastSentByIp.set(ip, now);
	dailyCount += 1;
	return false;
};

// Everything below comes from the visitor's browser, so escape it
const escapeHtml = (value) =>
	String(value ?? "")
		.slice(0, 500)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");

// @desc    Email a notification when someone downloads the resume
// @route   POST /api/track/resume-download
// @access  Public
router.post("/resume-download", async (req, res) => {
	// Respond straight away; the browser does not wait for this
	res.status(204).end();

	const forwardedFor = req.headers["x-forwarded-for"];
	const ip = (forwardedFor ? forwardedFor.split(",")[0] : req.ip || "")
		.trim();

	if (isRateLimited(ip)) {
		console.log("📄 Resume download (email skipped, rate limited)");
		return;
	}

	const KNOWN_SOURCES = ["hero", "navbar", "mobile-menu"];
	const source = KNOWN_SOURCES.includes(req.body?.source)
		? req.body.source
		: "unknown";
	const page = req.body?.page || "";
	const time = new Date().toLocaleString("en-IN", {
		timeZone: "Asia/Kolkata",
		dateStyle: "medium",
		timeStyle: "medium",
	});

	const rows = [
		["Time (IST)", time],
		["Button", source],
		["Page", page],
		["Came from", req.body?.referrer || "Direct / unknown"],
		["Browser", req.headers["user-agent"]],
		["IP address", ip],
	]
		.map(
			([label, value]) =>
				`<tr><td style="padding: 6px 12px; color: #666;">${label}</td><td style="padding: 6px 12px;">${escapeHtml(value)}</td></tr>`,
		)
		.join("");

	console.log(`📄 Resume downloaded via ${source}`);

	try {
		await sendEmail({
			subject: `Resume downloaded (${source}) - ${time}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px;">
					<h2 style="color: #333;">Someone downloaded your resume</h2>
					<table style="border-collapse: collapse; font-size: 14px;">${rows}</table>
				</div>
			`,
		});
	} catch (error) {
		console.error("Resume download email error:", error);
	}
});

module.exports = router;
