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
						alt="little-lemon-logo"
						onClick={scrollToTop}
						style={{ cursor: "pointer" }} // Make it clear the logo is clickable
					/>
				</div>
				<div className="footer-nav-and-contact">
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
							<br />
							(617) 555-7890
						</p>
						<p className="email">contact@littlelemon.com</p>
					</div>
					<div className="footer-social">
						<h3>Social Media Links</h3>
						<div className="social-icons">
							<img src={instagram} alt="instagram-icon" />
							<img src={tiktok} alt="tiktok-icon" />
							<img src={facebook} alt="facebook-icon" />
							<img src={twitter} alt="twitter-icon" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
