import React from "react";
import "./BookingSlot.css";

function BookingSlot({ time, isBooked }) {
	return (
		<div
			className={`booking-slot ${isBooked ? "booked" : "available"}`}
			role="button"
			aria-pressed={isBooked} // Indicates whether the slot is booked
			aria-label={`Time slot at ${time} is ${isBooked ? "booked" : "available"}`}
			tabIndex="0" // Makes it focusable for keyboard navigation
		>
			<span>{time}</span>
			{isBooked && <span className="status">Booked</span>}
		</div>
	);
}

export default BookingSlot;
