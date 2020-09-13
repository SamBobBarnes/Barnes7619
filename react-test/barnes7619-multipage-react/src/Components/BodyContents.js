import React from 'react';
import '../CSS/Fonts.css';
import '../CSS/Main.css';

function BodyContents(props) {
	const { font } = props;
	return <p className={font}>{props.children}</p>;
}

export default BodyContents;
