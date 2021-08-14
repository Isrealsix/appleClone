import { Fragment } from 'react';
import './App.scss';
import SectionOne from './components/sectionOne/SectionOne';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionThree from './components/sectionThree/SectionThree';
import SectionFour from './components/sectionFour/SectionFour';

function App() {
	return (
		<Fragment>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
		</Fragment>
	);
}

export default App;
