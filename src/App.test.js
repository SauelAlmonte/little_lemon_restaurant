import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders App component", () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);

	// Example assertion
	// Replace with actual text from your App component
	const linkElement = screen.getByText(/specials/i);
	expect(linkElement).toBeInTheDocument();
});
