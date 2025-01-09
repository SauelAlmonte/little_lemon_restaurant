import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main";

test("renders Main component", () => {
	render(
		<MemoryRouter>
			<Main />
		</MemoryRouter>
	);

	// Example assertion: Check for an element from the Main component
	const heroSection = screen.getByText(/Specials/i); // Adjust based on Main component content
	expect(heroSection).toBeInTheDocument();
});
