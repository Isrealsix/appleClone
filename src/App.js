import { Fragment } from 'react';
import './App.scss';
import SectionOne from './components/sectionOne/SectionOne';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionThree from './components/sectionThree/SectionThree';

function App() {
	return (
		<Fragment>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</Fragment>
	);
}

export default App;
