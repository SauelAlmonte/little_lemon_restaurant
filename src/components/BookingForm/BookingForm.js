/* global fetchAPI */
import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import BookingSlot from "../BookingSlot/BookingSlot";
import { fetchAPI } from "../../utils/fetchAPI";

function BookingForm({ availableTimes, dispatch, submitForm }) {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [reservationDetails, setReservationDetails] = useState(null); // Store reservation details
	const [bookedTimes, setBookedTimes] = useState([]);

	// Load booked times from local storage on initialization
	useEffect(() => {
		const savedBookedTimes =
			JSON.parse(localStorage.getItem("bookedTimes")) || [];
		setBookedTimes(savedBookedTimes);
	}, []);

	// Initialize times using fetchAPI
	useEffect(() => {
		const today = new Date();
		const fetchTimes = async () => {
			try {
				const initialTimes = await fetchAPI(today);
				dispatch({ type: "UPDATE_TIMES", payload: initialTimes });
			} catch (error) {
				console.error("Error fetching times:", error);
			}
		};
		fetchTimes();
	}, [dispatch]);

	// Handle date change and fetch new available times
	const handleDateChange = async (e) => {
		const selectedDateString = e.target.value;
		const selectedDate = new Date(selectedDateString);
		setDate(selectedDateString);

		try {
			const updatedTimes = await fetchAPI(selectedDate);
			dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });
		} catch (error) {
			console.error("Error fetching updated times:", error);
		}
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Create booking object with all details
		const newBooking = { date, time, guests, occasion };

		// Call submitForm and handle success
		const isSuccessful = await submitForm(newBooking);
		if (isSuccessful) {
			// Save reservation details for ConfirmedBooking
			setReservationDetails(newBooking);

			// Update state and local storage
			const updatedBookedTimes = [...bookedTimes, newBooking];
			setBookedTimes(updatedBookedTimes);
			localStorage.setItem("bookedTimes", JSON.stringify(updatedBookedTimes));

			// Show confirmation modal
			setShowModal(true);
		} else {
			alert("Failed to submit booking. Please try again.");
		}
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
									disabled={bookedTimes.some(
										(booking) => booking.date === date && booking.time === availableTime
									)}
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
					{availableTimes.map((availableTime, index) => (
						<BookingSlot
							key={index}
							time={availableTime}
							isBooked={bookedTimes.some(
								(booking) => booking.date === date && booking.time === availableTime
							)}
							bookingDetails={bookedTimes.find(
								(booking) => booking.date === date && booking.time === availableTime
							)} // Pass booking details if booked
						/>
					))}
				</div>
			</div>
			<ConfirmationModal
				show={showModal}
				bookingDetails={{ date, time, occasion }}
			/>
		</>
	);
}

export default BookingForm;
