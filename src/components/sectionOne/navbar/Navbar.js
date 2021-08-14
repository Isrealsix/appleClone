import React, { Fragment } from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import './_navbar.scss';

const Navbar = () => {
	return (
		<div>
			{/* logo */}
			<a href="#" className="logo">
				<AppleIcon className="logo" />
			</a>

			{/* Navbar */}
			<nav className="navbar">
				<ul>
					<li className="navbar__list">
						<a href="#iphones" className="navbar__link">
							iPhonea 12
						</a>
					</li>
					<li className="navbar__list">
						<a href="#macbooks" className="navbar__link">
							Macbook Air
						</a>
					</li>
					<li className="navbar__list">
						<a href="#watches" className="navbar__link">
							Watch
						</a>
					</li>
					<li className="navbar__list">
						<a href="#airpods" className="navbar__link">
							AirPods
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
