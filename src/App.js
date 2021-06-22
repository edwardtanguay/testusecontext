import React from 'react';
import ThemeContext from './contexts/ThemeContext';
import './App.css';
import SectionOne from './components/SectionOne';

function App() {
	return (
		<ThemeContext.Provider value="green">
			<div className="App">
				<SectionOne/>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;