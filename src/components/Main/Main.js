import React, { useReducer } from "react";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
import BookingForm from "../BookingForm/BookingForm";

// Initialize available times
const initializeTimes = () => [
	"17:00",
	"18:00",
	"19:00",
	"20:00",
	"21:00",
	"22:00",
];

// Reducer function to update available times
const updateTimes = (state, action) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			// For now, return the same available times regardless of the date
			return initializeTimes();
		default:
			return state;
	}
};

function Main() {
	// useReducer for managing available times
	const [availableTimes, dispatchAvailableTimes] = useReducer(
		updateTimes,
		initializeTimes()
	);

	return (
		<main>
			<Specials />
			<Testimonials />
			<About />

			<section id="booking-section">
				<h2>Book Your Table</h2>
				<BookingForm
					availableTimes={availableTimes}
					dispatchAvailableTimes={dispatchAvailableTimes}
				/>
			</section>
		</main>
	);
}

export default Main;
