import React, { useState } from "react";
import "./BookingForm.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal"; // Import the modal

function BookingForm() {
	// State variables for form fields
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("");
	const [showModal, setShowModal] = useState(false); // Modal visibility state

	// Available times for the time dropdown
	const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// Display the modal upon successful submission
		setShowModal(true);
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
							onChange={(e) => setDate(e.target.value)}
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

			{/* Render the modal */}
			<ConfirmationModal show={showModal} />
		</>
	);
}

export default BookingForm;
