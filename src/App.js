import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BookingForm from "./components/BookingForm/BookingForm";

function App() {
	return (
		<div className="App">
			<Header className="App-header" />
			<main className="App-main">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Hero />
								<Main />
							</>
						}
					/>
					<Route path="/reserve-table" element={<BookingForm />} />
				</Routes>
			</main>
			<Footer className="App-footer" />
		</div>
	);
}

export default App;
