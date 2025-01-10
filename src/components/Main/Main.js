import React, { useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // Import useNavigate
import Hero from "../Hero/Hero";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
import BookingForm from "../BookingForm/BookingForm";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking"; // Import ConfirmedBooking

// Reducer function for availableTimes
export const updateTimes = (state, action) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			// Ensure times are plain strings, not objects
			return state.map((time) => (typeof time === "string" ? time : time.time));
		default:
			return state;
	}
};

export const initializeTimes = () => {
	return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Plain strings
};

function Main() {
	// State for available times
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);

	// Global state for booked times
	const [bookedTimes, setBookedTimes] = useState([]);

	const navigate = useNavigate(); // Initialize navigate function

	// Step 2: Set up the submitForm function
	const submitForm = async (formData) => {
		console.log("Submitting form data:", formData);
		try {
			const response = await submitAPI(formData);
			if (response) {
				navigate("/confirmation"); // Navigate to confirmation page on success
			} else {
				alert("Error: Unable to submit your reservation. Please try again.");
			}
			return response; // Returns true or false
		} catch (error) {
			console.error("Error in submitForm:", error);
			alert("An unexpected error occurred. Please try again later.");
			return false;
		}
	};

	return (
		<main aria-label="Main content">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<Specials />
							<Testimonials />
							<About />
						</>
					}
				/>
				<Route
					path="/reserve-table"
					element={
						<BookingForm
							availableTimes={availableTimes}
							dispatch={dispatch}
							bookedTimes={bookedTimes}
							setBookedTimes={setBookedTimes}
							submitForm={submitForm} // Pass submitForm to BookingForm
						/>
					}
				/>
				<Route path="/confirmation" element={<ConfirmedBooking />} />
			</Routes>
		</main>
	);
}

export default Main;
