import React from "react";
// import heroImage from "../assets/images/hero-image.jpg";

function Hero() {
	return (
		<section id="home" className="hero">
			<header>
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
			</header>
			<p>
				We are a family-owned Mediterranean restaurant, focused on traditional
				recipes served with a modern twist.
			</p>
			<button>Reserve a Table</button>
			{/* <img src={heroImage} alt="Delicious Mediterranean dishes" /> */}
		</section>
	);
}

export default Hero;
