import React, { useState } from "react";
import "./ReserveTable.css";
import dinner from "../../assets/images/eating.png";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const ReserveTable = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Occasion");
	const [showModal, setShowModal] = useState(false); // Modal visibility state

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectOption = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	const handleReserveClick = () => {
		setShowModal(true); // Show the modal when Reserve Table is clicked
	};

	const handleCloseModal = () => {
		setShowModal(false); // Hide the modal
	};

	const options = ["Birthday", "Engagement", "Anniversary"];

	return (
		<div className="reserve-table-section">
			<div className="reserve-table-container">
				<label className="dropdown-label">Select occasion</label>
				<div className="reserve-table">
					<button className="dropdown-button" onClick={toggleDropdown}>
						<img className="dinner-icon" src={dinner} alt="dinner-icon" />
						{selectedOption}
						<span className="arrow">▼</span>
					</button>
					{isOpen && (
						<ul className="dropdown-menu">
							{options.map((option, index) => (
								<li
									key={index}
									className="dropdown-item"
									onClick={() => selectOption(option)}
								>
									{option}
								</li>
							))}
						</ul>
					)}
				</div>
				<button
					className="reserve-table-button"
					onClick={handleReserveClick}
					disabled={selectedOption === "Occasion"}
				>
					Reserve Table
				</button>
			</div>
			{/* Render the modal */}
			<ConfirmationModal show={showModal} onClose={handleCloseModal} />
		</div>
	);
};

export default ReserveTable;
