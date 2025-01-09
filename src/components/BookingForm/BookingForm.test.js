import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm correctly", () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockDispatch = jest.fn();

    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

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

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
});

test("submits BookingForm successfully", () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockDispatch = jest.fn();

    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

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

    fireEvent.submit(screen.getByRole("button", { name: /make your reservation/i }));

    // Check if dispatch was called with correct action
    expect(mockDispatch).toHaveBeenCalledWith({
        type: "UPDATE_TIMES",
        payload: "17:00",
    });

    // Check if confirmation modal appears (or other relevant side effects)
    expect(screen.getByText(/available booking slots/i)).toBeInTheDocument();
});
