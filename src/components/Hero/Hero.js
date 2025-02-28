import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Hero.css";
import heroImage from "../../assets/images/restauranfood.jpg";

function Hero() {
	return (
		<section id="home" className="hero" aria-labelledby="hero-title">
			<div className="hero-container">
				<div className="hero-text-and-button-container">
					<div className="hero-text">
						<h1 id="hero-title" className="title">
							Little Lemon
						</h1>
						<h2 className="subtitle">Chicago</h2>
						<p>
							We are a family-owned Mediterranean restaurant, focused on traditional
							recipes served with a modern twist.
						</p>
					</div>
					<Link to="/reserve-table">
						<button
							className="reserve-button"
							aria-label="Reserve a table at Little Lemon"
						>
							Reserve a Table
						</button>
					</Link>
				</div>
				<div className="hero-image">
					<img
						src={heroImage}
						alt="Delicious dishes served at Little Lemon"
						aria-labelledby="hero-title"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
