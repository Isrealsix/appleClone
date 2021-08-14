import { Fragment } from 'react';
import './Macbook.scss';

const Macbook = () => {
	return (
		<Fragment>
			{/* <!-- MacBooks imgs --> */}
			<img
				src="/images/MacBook/macbook-screen.png"
				alt="Macbook screen"
				class="macbook-img-1"
			/>
			<img
				src="/images/MacBook/macbook-keyboard.png"
				alt="Macbook Keyboard"
				class="macbook-img-2"
			/>

			{/* <!-- Loading --> */}
			<div class="loading-wrapper">
				<div class="loading center">
					<i class="fab fa-apple"></i>
					<div class="progress-bar"></div>
				</div>
			</div>

			{/* <!-- Info --> */}
			<div class="macbook-info">
				<h2 class="macbook-info__heading">Light. Speed.</h2>
				<p class="macbook-info__price">Starting at $999</p>
				<button class="macbook-info__btn">Buy Now</button>
			</div>
		</Fragment>
	);
};

export default Macbook;
