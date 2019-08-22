import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";
import icon from "../../portfolio.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="logo"></div>
				<div className="navLinks">
      				<NavLink exact={true} to="/" className="navLink">About</NavLink>
      				<NavLink to="/works" className="navLink ">Portfolio</NavLink>
      				<NavLink to="/contact" className="navLink">Contact</NavLink>
    			</div>
		</nav>
	);
}