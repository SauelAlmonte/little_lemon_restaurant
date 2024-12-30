import React from "react";

function Footer() {
	return (
		<footer>
			<div className="footer-nav">
				<h3>Doormat Navigation</h3>
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#menu">Menu</a>
					</li>
					<li>
						<a href="#reservations">Reservations</a>
					</li>
					<li>
						<a href="#order">Order Online</a>
					</li>
					<li>
						<a href="#login">Login</a>
					</li>
				</ul>
			</div>
			<div className="footer-contact">
				<h3>Contact</h3>
				<p>
					123 Harmony Street
					<br />
					Boston, MA 02116
				</p>
				<p>(617) 555-7890</p>
				<p>contact@littlelemon.com</p>
			</div>
			<div className="footer-social">
				<h3>Social Media Links</h3>
				<p>Icons here</p>
			</div>
		</footer>
	);
}

export default Footer;
