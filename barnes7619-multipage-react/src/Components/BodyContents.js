import React from 'react';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/Main.module.css';
import cx from 'classnames';

function BodyContents(props) {
	const { font } = props;
	return (
		<p
			className={
				font
					? cx(styles.newLine, fontStyles.JosefinSans20)
					: cx(styles.newLine, fontStyles.BalsamiqSans20)
			}
		>
			{props.children}
		</p>
	);
}

export default BodyContents;
