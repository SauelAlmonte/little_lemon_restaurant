import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ConfirmationPage from "./components/ConfirmedBooking/ConfirmedBooking";

function App() {
	return (
		<div className="App" role="application" aria-label="Little Lemon App">
			<Header className="App-header" />
			<main className="App-main" role="main">
				<Routes>
					<Route path="/confirmation" element={<ConfirmationPage />} />
					<Route path="*" element={<Main />} />
				</Routes>
			</main>
			<Footer className="App-footer" />
		</div>
	);
}

export default App;
