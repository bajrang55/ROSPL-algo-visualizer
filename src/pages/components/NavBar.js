import React from "react";
import Logo from "./Logo";
import "../../css/NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
	// console.log("path of ->" + logo);
	return (
		<nav style={{ zIndex: "99" }}>
			<Logo heightInPixel={47} style={{ cursor: "pointer" }} to="/" />

			<div className="Link-Container">
				
				<NavLink to="/singlylinklist">Singly Linked List</NavLink>

				
			</div>
		</nav>
	);
}

export default NavBar;
