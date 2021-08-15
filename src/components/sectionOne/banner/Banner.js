import { Fragment } from 'react';
import './Banner.scss';
import Slideshow from './Slideshow';

const Banner = () => {
	return (
		<Fragment>
			<div className="section-1__banner center">
				<h1>&#8592; Best Gift</h1>
				<p>"Creativity is just connecting things."</p>
				<span> - Steve Jobs</span>
				<button type="button">Buy Now</button>
			</div>

			<Slideshow />
		</Fragment>
	);
};

export default Banner;
