import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../../utils/fetchAPI"; // Correctly import fetchAPI

// Mock fetchAPI to avoid network requests during testing
jest.mock("../../utils/fetchAPI", () => ({
	fetchAPI: jest.fn(), // Mock the fetchAPI function directly
	submitAPI: jest.fn(), // Mock submitAPI if needed
}));

test("renders BookingForm correctly", () => {
	const mockAvailableTimes = ["17:00", "18:00", "19:00"];
	const mockDispatch = jest.fn();

	render(
		<BookingForm
			availableTimes={mockAvailableTimes}
			dispatch={mockDispatch}
			submitForm={() => {}}
		/>
	);

	const headingElement = screen.getByText("Available Booking Slots");
	expect(headingElement).toBeInTheDocument();

	const dateInput = screen.getByLabelText(/choose date/i);
	expect(dateInput).toBeInTheDocument();

	const timeSelect = screen.getByLabelText(/choose time/i);
	expect(timeSelect).toBeInTheDocument();

	const guestsInput = screen.getByLabelText(/number of guests/i);
	expect(guestsInput).toBeInTheDocument();

	const occasionSelect = screen.getByLabelText(/occasion/i);
	expect(occasionSelect).toBeInTheDocument();

	const submitButton = screen.getByRole("button", {
		name: /make your reservation/i,
	});
	expect(submitButton).toBeInTheDocument();
});

test("submits BookingForm successfully", async () => {
	const mockAvailableTimes = ["17:00", "18:00", "19:00"];
	const mockDispatch = jest.fn();
	const mockSubmitForm = jest.fn().mockResolvedValue(true); // Mock the submitForm function

	// Mock fetchAPI to return mockAvailableTimes directly
	fetchAPI.mockResolvedValue(mockAvailableTimes); // Now directly mock fetchAPI

	render(
		<BookingForm
			availableTimes={mockAvailableTimes}
			dispatch={mockDispatch}
			submitForm={mockSubmitForm}
		/>
	);

	// Simulate user input
	fireEvent.change(screen.getByLabelText(/choose date/i), {
		target: { value: "2025-01-08" },
	});
	fireEvent.change(screen.getByLabelText(/choose time/i), {
		target: { value: "17:00" },
	});
	fireEvent.change(screen.getByLabelText(/number of guests/i), {
		target: { value: "4" },
	});
	fireEvent.change(screen.getByLabelText(/occasion/i), {
		target: { value: "Birthday" },
	});

	// Simulate form submission
	fireEvent.submit(
		screen.getByRole("button", { name: /make your reservation/i })
	);

	// Check if submitForm was called with the correct data
	await waitFor(() =>
		expect(mockSubmitForm).toHaveBeenCalledWith({
			date: "2025-01-08",
			time: "17:00",
			guests: 4,
			occasion: "Birthday",
		})
	);

	// Check if the dispatch function was called to update times
	await waitFor(() =>
		expect(mockDispatch).toHaveBeenCalledWith({
			type: "UPDATE_TIMES",
			payload: mockAvailableTimes, // The mock fetchAPI will return these available times
		})
	);

	// Ensure the confirmation modal or relevant elements appear
	expect(screen.getByText(/available booking slots/i)).toBeInTheDocument();
});
