import React from "react";
import "./BookingSlot.css";

function BookingSlot({ time, isBooked }) {
	return (
		<div className={`booking-slot ${isBooked ? "booked" : "available"}`}>
			<span>{time}</span>
			{isBooked && <span className="status">Booked</span>}
		</div>
	);
}

export default BookingSlot;
