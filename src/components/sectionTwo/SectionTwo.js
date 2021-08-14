import React from 'react';
import './SectionTwo.scss';

const SectionTwo = () => {
	return (
		<section className="section-2" id="iphones">
			<h1 className="section-2__heading">iPhone 12</h1>

			{/*  iPhones display */}
			<div className="iphones">
				<img
					src="images/iPhone 12/iphones-1-img.png"
					alt="iPhone 1"
					className="iphone-img-1"
				/>
				<img
					src="images/iPhone 12/iphones-2-img.png"
					alt="iPhone 2"
					className="iphone-img-2"
				/>
			</div>

			{/* section-2 buttons */}
			<div className="iphone-btns">
				<a href="#" className="iphone-btn center">
					<span>Learn More</span>
				</a>
				<a href="#" className="iphone-btn center">
					<span>Shop</span>
				</a>
			</div>
		</section>
	);
};

export default SectionTwo;
