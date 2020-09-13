import React, { Component } from 'react';
import sideBarStyles from '../CSS/SideBar.module.css';
import Button from './Button';
import ButtonDownload from './ButtonDownload';

class SideBar extends Component {
	render() {
		const nodes = this.props.linkList.map((node) =>
			node.download ? (
				<ButtonDownload key={node.id} href={node.href}>
					{node.text}
				</ButtonDownload>
			) : (
				<Button
					key={node.id}
					href={node.href}
					current={node.current ? true : false}
				>
					{node.text}
				</Button>
			)
		);
		return <div className={sideBarStyles.sideBar}>{nodes}</div>;
	}
}

export default SideBar;
