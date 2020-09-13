import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/MainM.module.css';
import Hamburgerbutton from './HamburgerButton';

class HeaderM extends Component {
	render() {
		return (
			<div className={styles.head}>
				<Link to='/s'>
					<Hamburgerbutton />
				</Link>
				<h1>{this.props.children}</h1>
			</div>
		);
	}
}

export default HeaderM;
