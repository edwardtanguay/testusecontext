import React from 'react';
import ThemeContext from './contexts/ThemeContext';
import './App.css';
import SectionOne from './components/SectionOne';

const App = () => (
	<ThemeContext.Provider value="green">
		<div className="App">
			<SectionOne />
		</div>
	</ThemeContext.Provider>
);

export default App;