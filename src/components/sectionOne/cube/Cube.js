import React from 'react';
import './cube.scss';
import { Apple } from '@material-ui/icons';
import Controls from './controls/Controls';

const Cube = () => {
	return (
		<div className="cube-wrapper">
			<div className="cube">
				<div className="cube__front-side">
					<img src="/images/iphone.png" alt="Iphone" />
				</div>
				<div className="cube__back-side center">
					<Apple className="icon" />
				</div>
			</div>

			{/* Controls */}
			<Controls />
		</div>
	);
};

export default Cube;
