import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ReserveTable from "./components/ReserveTable/ReserveTable";

function App() {
	return (
		<>
			<Header />
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
				<Route path="/reserve-table" element={<ReserveTable />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
