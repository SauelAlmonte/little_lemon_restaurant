import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import Nav from "../Nav/Nav";

function Header() {
	return (
		<header id="/" className="header">
			<div className="header-container">
				<Link to="/">
					<img src={logo} alt="Little Lemon Logo" className="logo" />
				</Link>
				<Nav />
			</div>
		</header>
	);
}

export default Header;
