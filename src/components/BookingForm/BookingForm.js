/* global fetchAPI */
import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import BookingSlot from "../BookingSlot/BookingSlot";

function BookingForm({ availableTimes, dispatch }) {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [bookedTimes, setBookedTimes] = useState([]);

	// Load booked times from local storage on initialization
	useEffect(() => {
		const savedBookedTimes =
			JSON.parse(localStorage.getItem("bookedTimes")) || [];
		setBookedTimes(savedBookedTimes);
	}, []);

	// Initialize times using fetchAPI
	useEffect(() => {
		console.log(typeof fetchAPI); // Should log "function"

		const today = new Date(); // Use a proper Date object

		// Use async/await to handle promise from fetchAPI
		const fetchTimes = async () => {
			try {
				const initialTimes = await fetchAPI(today); // Await the fetch result
				dispatch({ type: "UPDATE_TIMES", payload: initialTimes }); // Dispatch times to state
			} catch (error) {
				console.error("Error fetching times:", error);
			}
		};

		fetchTimes();
	}, [dispatch]);

	// Handle date change and fetch new available times
	const handleDateChange = async (e) => {
		const selectedDateString = e.target.value; // Get the date string
		const selectedDate = new Date(selectedDateString); // Convert string to Date object
		setDate(selectedDateString); // Set the string for display purposes

		try {
			const updatedTimes = await fetchAPI(selectedDate); // Await the fetch result
			dispatch({ type: "UPDATE_TIMES", payload: updatedTimes }); // Dispatch updated times
		} catch (error) {
			console.error("Error fetching updated times:", error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedBookedTimes = [...bookedTimes, time];

		// Update state and local storage with the new booking
		setBookedTimes(updatedBookedTimes);
		localStorage.setItem("bookedTimes", JSON.stringify(updatedBookedTimes));

		// Dispatch to update state and show confirmation modal
		dispatch({ type: "UPDATE_TIMES", payload: time });
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
								<option
									key={index}
									value={availableTime}
									disabled={bookedTimes.includes(availableTime)} // Disable booked times
								>
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
							isBooked={bookedTimes.includes(time)}
						/>
					))}
				</div>
			</div>
			<ConfirmationModal show={showModal} />
		</>
	);
}

export default BookingForm;
