import React from "react";
import "./BookingSlot.css";

function BookingSlot({ time, isBooked, bookingDetails }) {
	// Ensure bookingDetails.date exists before formatting
	const formattedDate = bookingDetails?.date
		? new Date(bookingDetails.date).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric",
		  })
		: "";

	// Handle keyboard interaction
	const handleKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			// Trigger slot action (e.g., booking or showing details)
			e.preventDefault();
			// Add your logic here if needed
			console.log(`Slot at ${time} was interacted with.`);
		}
	};

	return (
		<div
			className={`booking-slot ${isBooked ? "booked" : "available"}`}
			role="button"
			aria-pressed={isBooked} // Indicates whether the slot is booked
			aria-label={`Time slot at ${time} is ${isBooked ? "booked" : "available"}`}
			tabIndex="0" // Makes it focusable for keyboard navigation
			onKeyDown={handleKeyDown} // Handles keyboard events
		>
			<div className="time-container">
				<span className="time">{time}</span>
				{isBooked && bookingDetails && (
					<div className="booking-details">
						<span>{`Date: ${formattedDate}`}</span>
						<span>{`Occasion: ${bookingDetails.occasion}`}</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default BookingSlot;
