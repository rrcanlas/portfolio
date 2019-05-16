import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";
import icon from "../../portfolio.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<img src={icon} alt="portfolio" />
				<div className="navLinks">
      				<NavLink exact={true} to="/" className="navLink">About</NavLink>
      				<NavLink to="/works" className="navLink ">Work</NavLink>
      				<NavLink to="/contact" className="navLink">Contact</NavLink>
    			</div>
		</nav>
	);
}