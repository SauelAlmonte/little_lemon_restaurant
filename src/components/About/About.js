import React from "react";
import "./About.css";
import aboutImage1 from "../../assets/images/restaurant.jpg";
import aboutImage2 from "../../assets/images/restaurant-chef-B.jpg";

function About() {
	return (
		<section id="about" className="about">
			<div className="about-container">
				<header>
					<div className="about-header">
						<h2>Little Lemon</h2>
						<p>Chicago</p>
					</div>
					<p className="about-paragraph">
						Nestled in the heart of Chicago, Little Lemon is a family-owned restaurant
						that celebrates the art of simple, flavorful, and fresh cuisine. Our menu
						is inspired by Mediterranean traditions, bringing together bold
						ingredients, vibrant colors, and a warm sense of hospitality.
						<br />
						<br />
						At Little Lemon, we believe food is more than nourishment; it’s an
						experience. From our hand-prepared dishes made with locally sourced
						ingredients to the cozy, welcoming atmosphere, every detail is crafted to
						make you feel at home.
					</p>
				</header>
				<div className="about-images-container">
					<figure className="about-images">
						<img src={aboutImage1} alt="Interior of Little Lemon" />
						<img src={aboutImage2} alt="Chef preparing food" />
					</figure>
				</div>
			</div>
		</section>
	);
}

export default About;
