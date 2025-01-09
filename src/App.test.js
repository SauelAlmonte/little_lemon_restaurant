import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";

test("renders Main component for root path /", () => {
	render(
		<MemoryRouter initialEntries={["/"]}>
			<Routes>
				<Route path="*" element={<Main />} /> {/* Add * to parent path */}
			</Routes>
		</MemoryRouter>
	);
});
