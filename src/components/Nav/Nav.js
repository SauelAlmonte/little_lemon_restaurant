import React, { useState } from "react";
import "./Nav.css";

function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav aria-label="Main Navigation" className="nav-container">
			<button
				className={`hamburger ${menuOpen ? "open" : ""}`}
				onClick={toggleMenu}
				aria-label="Toggle Menu"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<ul className={`nav ${menuOpen ? "nav-open" : ""}`}>
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/menu">Menu</a>
				</li>
				<li>
					<a href="/reservations">Reservations</a>
				</li>
				<li>
					<a href="/order-online">Order Online</a>
				</li>
				<li>
					<a href="/login">Login</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
