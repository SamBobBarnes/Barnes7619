import React, { Component } from 'react';
import styles from '../CSS/Main.module.css';

class Header extends Component {
	render() {
		return (
			<div className={styles.head}>
				<h1>{this.props.children}</h1>
			</div>
		);
	}
}

export default Header;
