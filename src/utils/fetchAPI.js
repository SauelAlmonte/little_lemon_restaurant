// src/utils/fetchAPI.js

export const fetchAPI = async (date) => {
	try {
		// Fetch the API script from the URL
		const response = await fetch(
			"https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
		);

		// Check if the response is successful
		if (!response.ok) {
			throw new Error("Failed to fetch API script");
		}

		// Create a new script element to dynamically load the API
		const scriptContent = await response.text();
		const script = document.createElement("script");
		script.textContent = scriptContent;
		document.body.appendChild(script);

		// Ensure the fetchAPI function is available globally
		if (typeof window.fetchAPI === "function") {
			return window.fetchAPI(date); // Use the fetchAPI function from the loaded script
		} else {
			throw new Error("fetchAPI function not found in the loaded script");
		}
	} catch (error) {
		console.error("Error fetching or executing the API script:", error);
		throw error;
	}
};

export const submitAPI = async (formData) => {
	try {
		// Fetch the API script from the URL
		const response = await fetch(
			"https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
		);

		// Check if the response is successful
		if (!response.ok) {
			throw new Error("Failed to fetch API script");
		}

		// Create a new script element to dynamically load the API
		const scriptContent = await response.text();
		const script = document.createElement("script");
		script.textContent = scriptContent;
		document.body.appendChild(script);

		// Ensure the submitAPI function is available globally
		if (typeof window.submitAPI === "function") {
			return window.submitAPI(formData); // Use the submitAPI function from the loaded script
		} else {
			throw new Error("submitAPI function not found in the loaded script");
		}
	} catch (error) {
		console.error("Error fetching or executing the API script:", error);
		throw error;
	}
};
