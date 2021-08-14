import { Fragment } from 'react';

const Banner = () => {
	return (
		<Fragment>
			<div className="section-1__banner center">
				<h1>&#8592; Best Gift</h1>
				<p>"Creativity is just connecting things."</p>
				<span> - Steve Jobs</span>
				<button type="button">Buy Now</button>
			</div>

			{/* slideshow */}
			<div className="slideshow"></div>
		</Fragment>
	);
};

export default Banner;
