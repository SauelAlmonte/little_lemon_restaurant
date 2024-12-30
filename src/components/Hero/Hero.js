import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/restauranfood.jpg";

function Hero() {
	return (
		<section className="hero">
			<div className="hero-container">
				<div className="hero-text-and-button-container">
					<div className="hero-text">
						<h1>Little Lemon</h1>
						<subtitle className="subtitle">Chicago</subtitle>
						<p>
							We are a family-owned Mediterranean restaurant, focused on traditional
							recipes served with a modern twist.
						</p>
					</div>
					<button className="reserve-button">Reserve a Table</button>
				</div>
				<div className="hero-image">
					<img src={heroImage} alt="Delicious dishes served at Little Lemon" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
