import React from "react";
import "./Specials.css";
import special1 from "../../assets/images/greek-salad.jpg";
import special2 from "../../assets/images/bruchetta.jpg";
import special3 from "../../assets/images/lemon-dessert.jpg";
import scooter from "../../assets/images/motorbike.png";

function Specials() {
	return (
		<section className="specials-container" aria-labelledby="specials-header">
			<section id="menu" className="specials">
				<div className="specials-header">
					<header>
						<h2 id="specials-header">This Week's Specials!</h2>
					</header>
					<div>
						<button className="online-menu-button" aria-label="View the online menu">
							Online Menu
						</button>
					</div>
				</div>
				<div className="specials-grid">
					<article className="special-item">
						<div className="special-image-container">
							<img src={special1} alt="Greek Salad - A bowl of fresh Greek salad" />
						</div>
						<div className="special-item-container">
							<h3>Greek Salad</h3>
							<p className="price">$12.99</p>
						</div>
						<div className="special-paragraph-container">
							<p>
								The famous Greek salad of crispy lettuce, peppers, olives, and our
								Chicago-style feta cheese, garnished with crunchy garlic and rosemary
								croutons.
							</p>
						</div>
						<button
							aria-label="Order a delivery for Greek Salad"
							aria-describedby="specials-header"
						>
							Order a delivery
							<img
								className="scooter-icon"
								src={scooter}
								alt="Delivery scooter icon"
							/>
						</button>
					</article>
					<article className="special-item">
						<div className="special-image-container">
							<img
								src={special2}
								alt="Bruschetta - Grilled bread with garlic and olive oil"
							/>
						</div>
						<div className="special-item-container">
							<h3>Bruschetta</h3>
							<p className="price">$5.99</p>
						</div>
						<div className="special-paragraph-container">
							<p>
								Our Bruschetta is made from grilled bread that has been smeared with
								garlic and seasoned with salt and olive oil.
							</p>
						</div>
						<button
							aria-label="Order a delivery for Bruschetta"
							aria-describedby="specials-header"
						>
							Order a delivery
							<img
								className="scooter-icon"
								src={scooter}
								alt="Delivery scooter icon"
							/>
						</button>
					</article>
					<article className="special-item">
						<div className="special-image-container">
							<img
								src={special3}
								alt="Lemon Dessert - Authentic lemon dessert made from grandma's recipe"
							/>
						</div>
						<div className="special-item-container">
							<h3>Lemon Dessert</h3>
							<p className="price">$5.00</p>
						</div>
						<div className="special-paragraph-container">
							<p>
								This comes straight from grandma’s recipe book. Every last ingredient
								has been sourced and is as authentic as can be imagined.
							</p>
						</div>
						<button
							aria-label="Order a delivery for Lemon Dessert"
							aria-describedby="specials-header"
						>
							Order a delivery
							<img
								className="scooter-icon"
								src={scooter}
								alt="Delivery scooter icon"
							/>
						</button>
					</article>
				</div>
			</section>
		</section>
	);
}

export default Specials;
