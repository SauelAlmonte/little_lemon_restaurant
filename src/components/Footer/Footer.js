import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import tiktok from "../../assets/images/tiktok.png";

function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Smooth scrolling effect
		});
	};

	return (
		<footer>
			<div className="footer-container">
				<div className="footer-logo">
					<img
						src={logo}
						alt="Little Lemon logo - Click to scroll to top"
						onClick={scrollToTop}
						style={{ cursor: "pointer" }} // Make it clear the logo is clickable
					/>
				</div>
				<div className="footer-nav-and-contact">
					<nav className="footer-nav" aria-label="Doormat Navigation">
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
					</nav>
					<div className="footer-contact">
						<h3>Contact</h3>
						<address>
							123 Harmony Street
							<br />
							Boston, MA 02116
							<br />
							<a href="tel:+16175557890">(617) 555-7890</a>
						</address>
						<a href="mailto:contact@littlelemon.com" className="email">
							contact@littlelemon.com
						</a>
					</div>
					<div className="footer-social">
						<h3>Social Media Links</h3>
						<div className="social-icons">
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={instagram} alt="Instagram - Visit us on Instagram" />
							</a>
							<a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
								<img src={tiktok} alt="TikTok - Visit us on TikTok" />
							</a>
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
								<img src={facebook} alt="Facebook - Visit us on Facebook" />
							</a>
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
								<img src={twitter} alt="Twitter - Visit us on Twitter" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
