import React, { useState } from "react";
import "./BookingForm.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import BookingSlot from "../BookingSlot/BookingSlot"; // Import BookingSlot

function BookingForm({
	availableTimes,
	dispatch,
	bookedTimes,
	setBookedTimes,
}) {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("");
	const [showModal, setShowModal] = useState(false); // Modal visibility state

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate that a date and time are selected
		if (!date || !time) {
			alert("Please select a valid date and time.");
			return;
		}

		// Prevent duplicate bookings
		if (bookedTimes.includes(time)) {
			alert("This time slot is already booked. Please select another.");
			return;
		}

		// Add the selected time to the global list of booked times
		setBookedTimes((prev) => [...prev, time]);

		// Dispatch action to update available times
		dispatch({ type: "UPDATE_TIMES", payload: time });

		// Display the modal upon successful submission
		setShowModal(true);

		// Reset form fields after submission
		setDate("");
		setTime("");
		setGuests(1);
		setOccasion("");
	};

	// Handle date change and dispatch the action
	const handleDateChange = (e) => {
		const selectedDate = e.target.value;
		setDate(selectedDate);

		// Clear selected time when the date changes
		setTime("");

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
							isBooked={bookedTimes.includes(time)} // Use global booked times
						/>
					))}
				</div>
			</div>

			{/* Confirmation Modal */}
			<ConfirmationModal show={showModal}>
				<p>
					Your reservation for {time} on {date} has been successfully made!
				</p>
			</ConfirmationModal>
		</>
	);
}

export default BookingForm;
