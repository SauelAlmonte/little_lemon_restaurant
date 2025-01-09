import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ConfirmationModal.css";
import thumbsup from "../../assets/images/thumbsup.png";

const ConfirmationModal = ({ show, bookingDetails }) => {
	const navigate = useNavigate(); // Initialize navigate function

	if (!show) {
		return null; // Do not render the modal if 'show' is false
	}

	const handleClose = () => {
		navigate("/"); // Navigate back to the home page
	};

	const handleGoToConfirmationPage = () => {
		navigate("/confirmation", { state: bookingDetails }); // Navigate to the confirmation page with booking details
	};

	return (
		<div className="modal-overlay">
			<div className="modal-container">
				<div className="close-button-container">
					<button className="modal-close-button" onClick={handleClose}>
						✖
					</button>
				</div>
				<div className="modal-content">
					<h2>Congratulations!!</h2>
					<img src={thumbsup} alt="Success" className="modal-icon" />
					<p>You have successfully reserved your table!</p>
					<div className="modal-actions">
						<button className="modal-button" onClick={handleGoToConfirmationPage}>
							View Confirmation Page
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
