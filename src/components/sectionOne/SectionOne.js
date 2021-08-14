import React from 'react';
import Banner from './banner/Banner';
import Cube from './cube/Cube';
import Navbar from './navbar/Navbar';
import './SectionOne.scss';

const SectionOne = () => {
	return (
		<section className="section-1">
			<Navbar />
			<Cube />
			<Banner />
		</section>
	);
};

export default SectionOne;
