import React, { Fragment } from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import './_navbar.scss';

const Navbar = () => {
	return (
		<Fragment>
			{/* logo */}
			<a href="#" class="logo">
				<AppleIcon className="logo" />
			</a>

			{/* Navbar */}
			<nav class="navbar">
				<ul>
					<li class="navbar__list">
						<a href="#iphones" class="navbar__link">
							iPhonea 12
						</a>
					</li>
					<li class="navbar__list">
						<a href="#macbooks" class="navbar__link">
							Macbook Air
						</a>
					</li>
					<li class="navbar__list">
						<a href="#watches" class="navbar__link">
							Watch
						</a>
					</li>
					<li class="navbar__list">
						<a href="#airpods" class="navbar__link">
							AirPods
						</a>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default Navbar;
