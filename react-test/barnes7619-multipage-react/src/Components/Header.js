import React, { Component } from 'react';
import '../CSS/Main.css';

class Header extends Component {
	render() {
		return (
			<div className='head'>
				<h1>{this.props.children}</h1>
			</div>
		);
	}
}

export default Header;
