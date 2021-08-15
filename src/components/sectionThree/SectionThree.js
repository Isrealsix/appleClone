import React from 'react';
import Macbook from './Macbook';
import './SectionThree.scss';

const SectionThree = () => {
	return (
		<section className="section-3 center" id="macbooks">
			<h1 className="section-3__heading">MacBook Air</h1>

			<div className="section-3__content center">
				<Macbook />
			</div>
		</section>
	);
};

export default SectionThree;
