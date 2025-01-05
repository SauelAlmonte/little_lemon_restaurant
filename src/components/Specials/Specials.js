import React from "react";
import "./Specials.css";
import special1 from "../../assets/images/greek-salad.jpg";
import special2 from "../../assets/images/bruchetta.jpg";
import special3 from "../../assets/images/lemon-dessert.jpg";
import scooter from "../../assets/images/motorbike.png";
function Specials() {
	return (
		<section className="specials-container">
			<section id="menu" className="specials">
				<div className="specials-header">
					<header>
						<h2>This Week's Specials!</h2>
					</header>
					<div>
						<button className="online-menu-button">Online Menu</button>
					</div>
				</div>
				<div className="specials-grid">
					<article className="special-item">
						<div className="special-image-container">
							<img src={special1} alt="Greek Salad" />
						</div>
						<div className="special-item-container">
							<h3>Greek Salad</h3>
							<p className="price">$12.99</p>
						</div>
						<div className="special-paragraph-container">
							<p>
								The famous greek salad of crispy lettuce, peppers, olives and our
								Chicago style feta cheese, garnished with crunchy garlic and rosemary
								croutons.
							</p>
						</div>
						<button>
							Order a delivery
							<img className="scooter-icon" src={scooter} alt="scooter" />
						</button>
					</article>
					<article className="special-item">
						<div className="special-image-container">
							<img src={special2} alt="Bruschetta" />
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
						<button>
							Order a delivery
							<img className="scooter-icon" src={scooter} alt="scooter" />
						</button>
					</article>
					<article className="special-item">
						<div className="special-image-container">
							<img src={special3} alt="Lemon Dessert" />
						</div>
						<div className="special-item-container">
							<h3>Lemon Dessert</h3>
							<p className="price">$5.00</p>
						</div>
						<div className="special-paragraph-container">
							<p>
								This comes straight from grandma’s recipe book, every last ingredient
								has been sourced and is as authentic as can be imagined.
							</p>
						</div>
						<button>
							Order a delivery
							<img className="scooter-icon" src={scooter} alt="scooter" />
						</button>
					</article>
				</div>
			</section>
		</section>
	);
}

export default Specials;
