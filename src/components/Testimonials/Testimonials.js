import React from "react";
import avatar1 from "../../assets/images/avatar-woman.png";
import avatar2 from "../../assets/images/avatar-man.png";
import "./Testimonials.css";

function Testimonials() {
	return (
		<section
			id="testimonials"
			className="testimonials"
			aria-labelledby="testimonials-header"
		>
			<div className="testimonials-container">
				<header>
					<h2 id="testimonials-header">Testimonials</h2>
				</header>
				<div className="testimonials-grid">
					<article className="testimonial">
						<div className="avatar">
							<img src={avatar2} alt="Avatar of Sam Lopez from San Diego, CA" />
							<div>
								<h4>Sam Lopez</h4>
								<p>San Diego, CA</p>
							</div>
						</div>
						<blockquote>
							<p>“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</p>
						</blockquote>
					</article>
					<article className="testimonial">
						<div className="avatar">
							<img src={avatar1} alt="Avatar of Jasmine Smith from Boston, MA" />
							<div>
								<h4>Jasmine Smith</h4>
								<p>Boston, MA</p>
							</div>
						</div>
						<blockquote>
							<p>“We had such a great time celebrating my grandmother's birthday!”</p>
						</blockquote>
					</article>
					<article className="testimonial">
						<div className="avatar">
							<img src={avatar2} alt="Avatar of John Henry from New York, NY" />
							<div>
								<h4>John Henry</h4>
								<p>New York, NY</p>
							</div>
						</div>
						<blockquote>
							<p>“Best Feta Salad in town. Flawless every time!”</p>
						</blockquote>
					</article>
					<article className="testimonial">
						<div className="avatar">
							<img src={avatar1} alt="Avatar of Denis Carlson from Miami, FL" />
							<div>
								<h4>Denis Carlson</h4>
								<p>Miami, FL</p>
							</div>
						</div>
						<blockquote>
							<p>“Such a chilled-out atmosphere - love it!”</p>
						</blockquote>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
