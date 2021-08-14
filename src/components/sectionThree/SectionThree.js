import React from 'react';
import Macbook from './Macbook';
import './SectionThree.scss';

const SectionThree = () => {
	return (
		<section class="section-3 center" id="macbooks">
			<h1 class="section-3__heading">MacBook Air</h1>

			<div class="section-3__content center">
				<Macbook />
			</div>
		</section>
	);
};

export default SectionThree;
