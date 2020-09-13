import React from 'react';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/Main.module.css';

function BodyContents(props) {
	const { font } = props;
	return <p className={fontStyles.font}>{props.children}</p>;
}

export default BodyContents;
