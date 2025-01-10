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

		// Get the JavaScript content as text
		const scriptContent = await response.text();

		// Dynamically evaluate the fetched script to make the functions available
		eval(scriptContent); // This will load the fetchAPI and submitAPI functions into the current context

		// Now you can use the fetchAPI function from the script
		const availableTimes = fetchAPI(date); // Call the fetchAPI function defined in the script
		return availableTimes;
	} catch (error) {
		console.error("Error fetching or executing the API script:", error);
		throw error;
	}
};

export const submitAPI = async (formData) => {
	try {
		// Fetch the API script from the URL to ensure submitAPI is loaded
		const response = await fetch(
			"https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
		);

		// Check if the response is successful
		if (!response.ok) {
			throw new Error("Failed to fetch API script");
		}

		// Get the JavaScript content as text
		const scriptContent = await response.text();

		// Dynamically evaluate the fetched script to make the functions available
		eval(scriptContent); // This will load the submitAPI function into the current context

		// Now you can use the submitAPI function from the script
		const result = submitAPI(formData); // Call the submitAPI function defined in the script
		return result;
	} catch (error) {
		console.error("Error fetching or executing the API script:", error);
		throw error;
	}
};
