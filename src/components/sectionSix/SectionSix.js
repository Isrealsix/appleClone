import React from 'react';
import './SectionSix.scss';

const SectionSix = () => {
	return (
		<section className="section-6 center">
			<div className="section-6__icons">
				<a href="#home" className="section-6__icons-link">
					<img src="/images/icons/home-icon.png" alt="home" />
				</a>
				<a href="#iphones" className="section-6__icons-link">
					<img src="/images/icons/iphone-icon.png" alt="iphones" />
				</a>
				<a href="#macbooks" className="section-6__icons-link">
					<img src="/images/icons/macbook-icon.png" alt="macbooks" />
				</a>
				<a href="#watches" className="section-6__icons-link">
					<img src="/images/icons/watch-icon.png" alt="watches" />
				</a>
				<a href="#airpods" className="section-6__icons-link">
					<img src="/images/icons/airpods-icon.png" alt="airpods" />
				</a>
			</div>
			<p className="section-6__copyright">
				Copyright &copy; @Isrealsix All Rights Reserved
			</p>
		</section>
	);
};

export default SectionSix;
