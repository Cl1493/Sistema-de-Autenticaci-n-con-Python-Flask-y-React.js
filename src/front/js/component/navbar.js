import React, { useContext} from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Go on</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
