import React, { useReducer } from "react";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";

function Main() {
	return (
		<main>
			<Specials />
			<Testimonials />
			<About />
		</main>
	);
}

export default Main;
