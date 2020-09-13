import React, { Component } from 'react';
import styles from '../CSS/MainM.module.css';

class HeaderM extends Component {
	render() {
		return (
			<div className={styles.head}>
				<h1>{this.props.children}</h1>
			</div>
		);
	}
}

export default HeaderM;
