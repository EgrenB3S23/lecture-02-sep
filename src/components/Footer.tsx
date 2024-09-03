import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Footer(): ReactElement {
	return (
		<footer className="footer">
			<p>© 2024 Avengers Initiative. All rights reserved.</p>
			<div className="links">
				{/* default <a> links force a hard refresh which would ruin our state */}
				{/* <a href={"/"}>Home</a>
				<a href="/about">About</a>
				<a href="/join-us">Join</a> */}
				{/* ...so we're using <Link> instead: */}
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/join-us">Join</Link>
			</div>
		</footer>
	);
}
