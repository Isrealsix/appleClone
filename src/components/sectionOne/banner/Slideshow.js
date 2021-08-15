import React from 'react';
import './Slideshow.scss';

const Slideshow = () => {
	// Create slideshow: children with background image
	// const divElement = [];
	// const createSlideshowDivs = () => {
	// 	for (let i = 1; i <= 5; i++) {
	// 		let div = (
	// 			<div
	// 				style={{
	// 					backgroundImage: `url(/images/slideshow/section-1-bg-${i}.jpg)`,
	// 				}}
	// 			></div>
	// 		);
	// 		if (i === 1) {
	// 			div = <div className="change"></div>;
	// 		}
	// 		divElement.push(div);
	// 		// i === 1 && `<div className="change"></div>`

	// 		// div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

	// 		// document.querySelector('.slideshow').appendChild(div);
	// 	}
	// };

	// createSlideshowDivs();
	// divElement.forEach(item => console.log(item));
	// console.log(divElement);

	//all divs
	// const slideShowDivs = document.querySelectorAll('.slideshow div');

	// let count = 1;

	// setInterval(() => {
	// 	const slide = document.querySelector('.slideshow .change');
	// 	count++;
	// 	slide.classList.remove('change');

	// 	if (count < slideShowDivs.length) {
	// 		slide.nextElementSibling.classList.add('change');
	// 	} else {
	// 		count = 1;
	// 		slideShowDivs[0].classList.add('change');
	// 	}
	// }, 10000);

	return <div className="slideshow"></div>;
};

export default Slideshow;
