import React, { useState } from "react";
import "./BookingForm.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import BookingSlot from "../BookingSlot/BookingSlot"; // Import BookingSlot

function BookingForm({ availableTimes, dispatch }) {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("");
	const [showModal, setShowModal] = useState(false); // Modal visibility state
	const [bookedTimes, setBookedTimes] = useState([]); // State for booked times

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// Add the selected time to the list of booked times
		setBookedTimes((prev) => [...prev, time]);

		// Dispatch action to mark the selected time as booked
		dispatch({ type: "UPDATE_TIMES", payload: time });

		// Display the modal upon successful submission
		setShowModal(true);
	};

	// Handle date change and dispatch the action
	const handleDateChange = (e) => {
		const selectedDate = e.target.value;
		setDate(selectedDate);

		// Dispatch action to update availableTimes based on selectedDate
		dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
	};

	return (
		<>
			<div className="booking-form-section">
				<div className="booking-form-container">
					<form onSubmit={handleSubmit} className="booking-form">
						<label htmlFor="res-date">Choose date</label>
						<input
							type="date"
							id="res-date"
							value={date}
							onChange={handleDateChange}
							required
						/>

						<label htmlFor="res-time">Choose time</label>
						<select
							id="res-time"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							required
						>
							<option value="" disabled>
								Select time
							</option>
							{availableTimes.map((availableTime, index) => (
								<option key={index} value={availableTime}>
									{availableTime}
								</option>
							))}
						</select>

						<label htmlFor="guests">Number of guests</label>
						<input
							type="number"
							id="guests"
							placeholder="1"
							min="1"
							max="10"
							value={guests}
							onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
							required
						/>

						<label htmlFor="occasion">Occasion</label>
						<select
							id="occasion"
							value={occasion}
							onChange={(e) => setOccasion(e.target.value)}
							required
						>
							<option value="" disabled>
								Select occasion
							</option>
							<option value="Birthday">Birthday</option>
							<option value="Anniversary">Anniversary</option>
							<option value="Engagement">Engagement</option>
						</select>

						<input type="submit" value="Make Your Reservation" />
					</form>
				</div>
			</div>
			<div className="booking-slots-section">
					<h2>Available Booking Slots</h2>
					<div className="booking-slots">
						{availableTimes.map((time, index) => (
							<BookingSlot
								key={index}
								time={time}
								isBooked={bookedTimes.includes(time)} // Correct logic
							/>
						))}
					</div>
				</div>

				<ConfirmationModal show={showModal} />
		</>
	);
}

export default BookingForm;
