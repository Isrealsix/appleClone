import { Fragment } from 'react';
import './App.scss';
import SectionOne from './components/sectionOne/SectionOne';
import SectionTwo from './components/sectionTwo/SectionTwo';

function App() {
	return (
		<Fragment>
			<SectionOne />
			<SectionTwo />
		</Fragment>
	);
}

export default App;
