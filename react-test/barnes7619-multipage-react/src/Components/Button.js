import React, { Component } from 'react';
import sideBarStyles from '../CSS/SideBar.module.css';
import fontStyles from '../CSS/Fonts.module.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';

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
						className={cx(sideBarStyles.sideBarItemH, fontStyles.PatrickHand20)}
					>
						<b>{this.props.children}</b>
					</div>
				) : (
					<div
						className={cx(sideBarStyles.sideBarItemN, fontStyles.PatrickHand20)}
					>
						<b>{this.props.children}</b>
					</div>
				)}
			</Link>
		);
	}
}

export default Button;
