import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import Nav from "../Nav/Nav";

function Header() {
	return (
		<header className="header" aria-label="Main header">
			<div className="header-container">
				<Link to="/" aria-label="Go to Little Lemon homepage">
					<img src={logo} alt="Little Lemon Logo" className="logo" />
				</Link>
				<Nav />
			</div>
		</header>
	);
}

export default Header;
