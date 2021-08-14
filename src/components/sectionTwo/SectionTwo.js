import React from 'react';
import './SectionTwo.scss';

const SectionTwo = () => {
	return (
		<section class="section-2" id="iphones">
			<h1 class="section-2__heading">iPhone 12</h1>

			{/*  iPhones display */}
			<div class="iphones">
				<img
					src="images/iPhone 12/iphones-1-img.png"
					alt="iPhone 1"
					class="iphone-img-1"
				/>
				<img
					src="images/iPhone 12/iphones-2-img.png"
					alt="iPhone 2"
					class="iphone-img-2"
				/>
			</div>

			{/* section-2 buttons */}
			<div class="iphone-btns">
				<a href="#" class="iphone-btn center">
					<span>Learn More</span>
				</a>
				<a href="#" class="iphone-btn center">
					<span>Shop</span>
				</a>
			</div>
		</section>
	);
};

export default SectionTwo;
