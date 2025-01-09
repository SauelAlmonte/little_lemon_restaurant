import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import "./ConfirmedBooking.css";
import thumbsup from "../../assets/images/thumbsup.png";

const ConfirmedBooking = () => {
	const navigate = useNavigate(); // Initialize navigate function
	const location = useLocation(); // Access the passed state
	const bookingDetails = location.state || {}; // Extract booking details from state

	// Format the date to "Month Day, Year"
	const formattedDate = bookingDetails.date
		? new Date(bookingDetails.date).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
		  })
		: "Not provided";

	const handleBackToHome = () => {
		navigate("/"); // Navigate back to the home page
	};

	return (
		<div
			className="confirmation-page-container"
			role="main"
			aria-labelledby="booking-confirmation-heading"
		>
			<h1>Booking Confirmed!</h1>
			<p>
				Your reservation has been successfully confirmed. Thank you for choosing
				Little Lemon!
			</p>
			<div
				className="booking-details"
				role="region"
				aria-labelledby="booking-details-heading"
			>
				<p>
					<strong>Date:</strong> {formattedDate}
				</p>
				<p>
					<strong>Time:</strong> {bookingDetails.time || "Not provided"}
				</p>
				<p>
					<strong>Occasion:</strong> {bookingDetails.occasion || "Not provided"}
				</p>
			</div>
			<div className="confirmation-image-container">
				<img src={thumbsup} alt="Booking Success" className="confirmation-image" />
				<button
					className="home-button"
					onClick={handleBackToHome}
					aria-label="Navigate back to the home page"
				>
					Back to Home
				</button>
			</div>
		</div>
	);
};

export default ConfirmedBooking;
