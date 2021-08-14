import { Fragment } from 'react';
import './App.scss';
import SectionOne from './components/sectionOne/SectionOne';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionThree from './components/sectionThree/SectionThree';
import SectionFour from './components/sectionFour/SectionFour';
import SectionFive from './components/sectionFive/SectionFive';

function App() {
	return (
		<Fragment>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
		</Fragment>
	);
}

export default App;
