import { Fragment } from 'react';
import './Watches.scss';
import {
	KeyboardArrowUp,
	ChevronRightSharp,
	KeyboardArrowDown,
	ChevronLeftSharp,
} from '@material-ui/icons';

const Watches = () => {
	return (
		<Fragment>
			{/* <!-- watches --> */}
			<div class="watch center">
				{/* <!-- Watch bands --> */}
				<div class="watch__bands center">
					<img
						src="/images/watches/watch-band-1.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-2.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-3.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-4.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-5.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-6.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-7.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-8.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
					<img
						src="/images/watches/watch-band-9.jpg"
						alt="watch band"
						class="watch__band--img"
					/>
				</div>

				{/*  <!-- Watch cases --> */}
				<div class="watch__cases center">
					<img
						src="/images/watches/watch-case-1.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-2.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-3.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-4.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-5.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-6.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-7.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-8.png"
						alt="watch case"
						class="watch__case--img"
					/>
					<img
						src="/images/watches/watch-case-9.png"
						alt="watch case"
						class="watch__case--img"
					/>
				</div>
			</div>

			{/* <!-- Watch Control --> */}

			<div class="watch-ctrl-btns">
				<a href="#" class="watch-control watch-control--top y-Axis center">
					<KeyboardArrowUp className="icon" />
					{/* <i class="fas fa-angle-up"></i> */}
				</a>
				<a href="#" class="watch-control watch-control--right x-Axis center">
					<ChevronRightSharp className="icon" />
					{/* <i class="fas fa-angle-right"></i> */}
				</a>
				<a href="#" class="watch-control watch-control--down y-Axis center">
					<KeyboardArrowDown className="icon" />
					{/* <i class="fas fa-angle-down"></i> */}
				</a>
				<a href="#" class="watch-control watch-control--left x-Axis center">
					<ChevronLeftSharp className="icon" />
					{/* <i class="fas fa-angle-left"></i> */}
				</a>
			</div>

			{/* <!-- Watch button --> */}
			<button class="watch-btn">Buy Now</button>
		</Fragment>
	);
};

export default Watches;
