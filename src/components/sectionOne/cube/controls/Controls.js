import React from 'react';
import {
	ArrowUpward,
	ArrowDownward,
	ArrowBack,
	ArrowForward,
} from '@material-ui/icons';
import './Controls.scss';

const Controls = () => {
	return (
		<div className="controls">
			<a href="#">
				{/*<i className="fas fa-arrow-up rotate-x-up"></i> */}
				<ArrowUpward className="icon" onClick={() => console.log('hi')} />
			</a>
			<a href="#">
				{/* <i className="fas fa-arrow-down rotate-x-down"></i> */}
				<ArrowDownward className="icon" />
			</a>
			<a href="#">
				{/* <i className="fas fa-arrow-left rotate-y-left"></i> */}
				<ArrowBack className="icon" />
			</a>
			<a href="#">
				{/* <i className="fas fa-arrow-right rotate-y-right"></i> */}
				<ArrowForward className="icon" />
			</a>
			<a href="#">
				{/* <i className="fas fa-arrow-down rotate-z-down"></i> */}
				<ArrowDownward className="icon" />
			</a>
			<a href="#">
				{/* <i className="fas fa-arrow-up rotate-z-up"></i> */}
				<ArrowUpward className="icon" />
			</a>
		</div>
	);
};

export default Controls;
