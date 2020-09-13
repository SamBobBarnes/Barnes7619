import React, { Component } from 'react';
import styles from '../CSS/MainM.module.css';

export class HamburgerButton extends Component {
	render() {
		return (
			<div className={styles.hamburgerbutton}>
				<div className={styles.hamburgerlineT} />
				<div className={styles.hamburgerspacer} />
				<div className={styles.hamburgerlineM} />
				<div className={styles.hamburgerspacer} />
				<div className={styles.hamburgerlineB} />
			</div>
		);
	}
}

export default HamburgerButton;
