import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import BookingSlot from "../BookingSlot/BookingSlot";
import { fetchAPI as fetchAPIUtil } from "../../utils/fetchAPI";

function BookingForm({ availableTimes, dispatch, submitForm }) {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(0);
	const [occasion, setOccasion] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [bookedTimes, setBookedTimes] = useState([]);
	const [errors, setErrors] = useState({}); // Track errors

	// Load booked times from local storage on initialization
	useEffect(() => {
		const savedBookedTimes =
			JSON.parse(localStorage.getItem("bookedTimes")) || [];
		setBookedTimes(savedBookedTimes);
	}, []);

	// Initialize times using fetchAPIUtil
	useEffect(() => {
		const today = new Date();
		const fetchTimes = async () => {
			try {
				const initialTimes = await fetchAPIUtil(today);
				dispatch({ type: "UPDATE_TIMES", payload: initialTimes });
			} catch (error) {
				console.error("Error fetching times:", error);
			}
		};
		fetchTimes();
	}, [dispatch]);

	// Validate inputs on form submission
	const validateForm = () => {
		const newErrors = {};
		if (!date) newErrors.date = "Please select a date. *";
		if (!time) newErrors.time = "Please select a time. *";
		if (!guests || guests < 1 || guests > 10)
			newErrors.guests = "Number of guests must be between 1 and 10. *";
		if (!occasion) newErrors.occasion = "Please select an occasion. *";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0; // Return true if no errors
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return; // Stop submission if validation fails
		}

		const newBooking = { date, time, guests, occasion };

		const isSuccessful = await submitForm(newBooking);
		if (isSuccessful) {
			const updatedBookedTimes = [...bookedTimes, newBooking];
			setBookedTimes(updatedBookedTimes);
			localStorage.setItem("bookedTimes", JSON.stringify(updatedBookedTimes));
			setShowModal(true);
		} else {
			alert("Failed to submit booking. Please try again.");
		}
	};

	return (
		<section
			className="booking-form-section"
			aria-labelledby="booking-form-title"
		>
			<h1 className="booking-form-title">Reserve a Table at Little Lemon</h1>
			<div className="booking-form-container">
				<form onSubmit={handleSubmit} className="booking-form" noValidate>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						aria-describedby="date-error"
					/>
					{errors.date && (
						<p
							className="error-message"
							id="date-error"
							role="alert"
							aria-live="assertive"
						>
							{errors.date}
						</p>
					)}

					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
						aria-describedby="time-error"
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
					{errors.time && (
						<p
							className="error-message"
							id="time-error"
							role="alert"
							aria-live="assertive"
						>
							{errors.time}
						</p>
					)}

					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
						id="guests"
						placeholder="0"
						min="1"
						max="10"
						value={guests}
						onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
						aria-describedby="guests-error"
					/>
					{errors.guests && (
						<p
							className="error-message"
							id="guests-error"
							role="alert"
							aria-live="assertive"
						>
							{errors.guests}
						</p>
					)}

					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}
						aria-describedby="occasion-error"
					>
						<option value="" disabled>
							Select occasion
						</option>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
						<option value="Engagement">Engagement</option>
					</select>
					{errors.occasion && (
						<p
							className="error-message"
							id="occasion-error"
							role="alert"
							aria-live="assertive"
						>
							{errors.occasion}
						</p>
					)}

					<input
						type="submit"
						value="Make Your Reservation"
						aria-label="Submit reservation form"
					/>
				</form>
			</div>
			<div
				className="booking-slots-section"
				aria-labelledby="available-slots-title"
			>
				<h2 id="available-slots-title">Available Booking Slots</h2>
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
							)}
						/>
					))}
				</div>
			</div>
			<ConfirmationModal
				show={showModal}
				bookingDetails={{ date, time, occasion }}
			/>
		</section>
	);
}

export default BookingForm;
