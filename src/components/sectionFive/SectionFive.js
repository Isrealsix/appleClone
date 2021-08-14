import React from 'react';
import './SectionFive.scss';

const SectionFive = () => {
	return (
		<section class="section-5 center" id="airpods">
			{/* <!-- Contents --> */}
			<div class="section-5__airpods">
				{/* <!-- section-5-heading --> */}
				<h1 class="section-5__airpods-heading">AirPods</h1>

				{/* <!-- Images --> */}
				<img
					src="/images/AirPods/airpods-1.png"
					class="airpods-img"
					alt="airpod 1"
				/>
				<img
					src="/images/AirPods/airpods-2.png"
					class="airpods-img"
					alt="airpod 2"
				/>

				<div class="section-5__airpods-buttons">
					<button class="airpods-btn">Learn More</button>
					<button class="airpods-btn">Buy</button>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;
