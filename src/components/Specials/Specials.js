import React from "react";
// import special1 from "../assets/images/greek-salad.jpg";
// import special2 from "../assets/images/bruschetta.jpg";
// import special3 from "../assets/images/lemon-dessert.jpg";

function Specials() {
	return (
		<section id="menu" className="specials">
			<header>
				<h2>This Week's Specials!</h2>
			</header>
			<div className="specials-grid">
				<article className="special-item">
					{/* <img src={special1} alt="Greek Salad" /> */}
					<h3>Greek Salad</h3>
					<p>$12.99</p>
					<p>The famous Greek salad...</p>
					<button>Order a delivery</button>
				</article>
				<article className="special-item">
					{/* <img src={special2} alt="Bruschetta" /> */}
					<h3>Bruschetta</h3>
					<p>$5.99</p>
					<p>Grilled bread with garlic...</p>
					<button>Order a delivery</button>
				</article>
				<article className="special-item">
					{/* <img src={special3} alt="Lemon Dessert" /> */}
					<h3>Lemon Dessert</h3>
					<p>$5.00</p>
					<p>Grandma's recipe...</p>
					<button>Order a delivery</button>
				</article>
			</div>
		</section>
	);
}

export default Specials;
