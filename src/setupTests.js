// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Add a root element to the document body for testing
beforeAll(() => {
	const root = document.createElement("div");
	root.id = "root";
	document.body.appendChild(root);
});

// Mock react-router-dom globally
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));
