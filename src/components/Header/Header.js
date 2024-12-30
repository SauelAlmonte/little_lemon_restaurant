import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import Nav from "../Nav/Nav";

function Header() {
	return (
		<header className="header">
			<div className="header-container">
				<img src={logo} alt="Little Lemon Logo" />
				<Nav />
			</div>
		</header>
	);
}

export default Header;
