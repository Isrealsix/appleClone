import React from 'react';
import './SectionFive.scss';

const SectionFive = () => {
	return (
		<section className="section-5 center" id="airpods">
			{/* <!-- Contents --> */}
			<div className="section-5__airpods">
				{/* <!-- section-5-heading --> */}
				<h1 className="section-5__airpods-heading">AirPods</h1>

				{/* <!-- Images --> */}
				<img
					src="/images/AirPods/airpods-1.png"
					className="airpods-img"
					alt="airpod 1"
				/>
				<img
					src="/images/AirPods/airpods-2.png"
					className="airpods-img"
					alt="airpod 2"
				/>

				<div className="section-5__airpods-buttons">
					<button className="airpods-btn">Learn More</button>
					<button className="airpods-btn">Buy</button>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;
