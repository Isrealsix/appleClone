import { Fragment } from 'react';
import './Macbook.scss';

const Macbook = () => {
	return (
		<Fragment>
			{/* <!-- MacBooks imgs --> */}
			<img
				src="/images/MacBook/macbook-screen.png"
				alt="Macbook screen"
				className="macbook-img-1"
			/>
			<img
				src="/images/MacBook/macbook-keyboard.png"
				alt="Macbook Keyboard"
				className="macbook-img-2"
			/>

			{/* <!-- Loading --> */}
			<div className="loading-wrapper">
				<div className="loading center">
					<i className="fab fa-apple"></i>
					<div className="progress-bar"></div>
				</div>
			</div>

			{/* <!-- Info --> */}
			<div className="macbook-info">
				<h2 className="macbook-info__heading">Light. Speed.</h2>
				<p className="macbook-info__price">Starting at $999</p>
				<button className="macbook-info__btn">Buy Now</button>
			</div>
		</Fragment>
	);
};

export default Macbook;
