import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex justify-around items-center bg-[#1e7175] h-10">
			<Link to="/" className="text-lg text-white">
				Home
			</Link>
			<Link to="/Repositories" className="text-lg text-white">
				Repositories
			</Link>
		</nav>
	);
}
