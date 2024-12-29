import React from "react";
// import aboutImage1 from "../assets/images/about-1.jpg";
// import aboutImage2 from "../assets/images/about-2.jpg";

function About() {
	return (
		<section id="about" className="about">
			<header>
				<h2>Little Lemon</h2>
				<h3>Chicago</h3>
			</header>
			<p>Lorem ipsum text for about section...</p>
			<figure className="about-images">
				{/* <img src={aboutImage1} alt="Interior of Little Lemon" />
				<img src={aboutImage2} alt="Chef preparing food" /> */}
			</figure>
		</section>
	);
}

export default About;
