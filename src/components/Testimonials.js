import React from "react";

function Testimonials() {
	return (
		<section id="testimonials" className="testimonials">
			<header>
				<h2>Testimonials</h2>
			</header>
			<div className="testimonials-grid">
				<article className="testimonial">
					<blockquote>
						<p>"Delicious every time!"</p>
					</blockquote>
					<footer>
						<h4>Sam Lopez</h4>
						<p>San Diego</p>
					</footer>
				</article>
				<article className="testimonial">
					<blockquote>
						<p>"Great food and atmosphere."</p>
					</blockquote>
					<footer>
						<h4>Jen Doe</h4>
						<p>Salt Lake City</p>
					</footer>
				</article>
				{/* Add more testimonials as needed */}
			</div>
		</section>
	);
}

export default Testimonials;
