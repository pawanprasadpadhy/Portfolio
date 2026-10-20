// Tell the backend the resume was downloaded, so it can email a notification.
// keepalive lets the request finish while the browser starts the download,
// and a form-encoded body avoids a CORS preflight request. The path avoids
// words like "track" or "beacon", which ad blockers commonly block.
export function trackResumeDownload(source) {
	const API_URL = process.env.REACT_APP_API_URL;
	if (!API_URL) return;

	const body = new URLSearchParams({
		source,
		page: window.location.pathname,
		referrer: document.referrer,
	});

	try {
		fetch(`${API_URL}/api/notify/resume-download`, {
			method: "POST",
			body,
			keepalive: true,
		}).catch(() => {});
	} catch {
		// Notifying must never get in the way of the download itself
	}
}
