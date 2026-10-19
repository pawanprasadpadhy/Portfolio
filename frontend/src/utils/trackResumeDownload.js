// Tell the backend the resume was downloaded, so it can email a notification.
// sendBeacon is used because it keeps sending even while the browser starts
// the download, and a form-encoded body avoids a CORS preflight request.
export function trackResumeDownload(source) {
	const API_URL = process.env.REACT_APP_API_URL;
	if (!API_URL) return;

	const url = `${API_URL}/api/track/resume-download`;
	const body = new URLSearchParams({
		source,
		page: window.location.pathname,
		referrer: document.referrer,
	});

	try {
		if (navigator.sendBeacon && navigator.sendBeacon(url, body)) return;
		fetch(url, { method: "POST", body, keepalive: true }).catch(() => {});
	} catch {
		// Tracking must never get in the way of the download itself
	}
}
