import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleScroll = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		setMenuOpen(false);
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
					<Link to="/" onClick={() => handleScroll("home")}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/" onClick={() => handleScroll("about")}>
						About
					</Link>
				</li>
				<li>
					<Link to="/" onClick={() => handleScroll("menu")}>
						Menu
					</Link>
				</li>
				<li>
					<Link to="/reserve-table" onClick={() => setMenuOpen(false)}>
						Reservations
					</Link>
				</li>
				<li>
					<Link to="/" onClick={() => handleScroll("order-online")}>
						Order Online
					</Link>
				</li>
				<li>
					<Link to="/" onClick={() => handleScroll("login")}>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
