import React from 'react';

import ThemeContext from "../contexts/ThemeContext";

const InformationBox = () => {
	const theColor = React.useContext(ThemeContext);
	return (
		<div style={{color: theColor}}>
			This information box is {theColor}.
		</div>
	);
};
export default InformationBox;