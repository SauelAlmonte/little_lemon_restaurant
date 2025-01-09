import React, { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../Hero/Hero";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
import BookingForm from "../BookingForm/BookingForm";

// Reducer function for availableTimes
// Exporting the reducer functions for testing
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

	return (
		<main>
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
							setBookedTimes={setBookedTimes} // Pass down bookedTimes and setter
						/>
					}
				/>
			</Routes>
		</main>
	);
}

export default Main;
