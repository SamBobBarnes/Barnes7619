import React, { Component } from 'react';
import sideBarStyles from '../CSS/SideBar.module.css';
import fontStyles from '../CSS/Fonts.module.css';
import { Link } from 'react-router-dom';

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			href: this.props.href,
		};
	}

	render() {
		return (
			<Link to={this.state.href} style={{ textDecoration: 'none' }}>
				{this.props.current ? (
					<div
						className={(sideBarStyles.sideBarItemH, fontStyles.PatrickHand20)}
					>
						<b>{this.props.children}</b>
					</div>
				) : (
					<div
						className={(sideBarStyles.sidebaritem, fontStyles.PatrickHand20)}
					>
						<b>{this.props.children}</b>
					</div>
				)}
			</Link>
		);
	}
}

export default Button;
