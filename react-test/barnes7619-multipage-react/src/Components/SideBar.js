import React, { Component } from 'react';
import '../CSS/SideBar.css';
import '../CSS/Fonts.css';
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
		return <div className='sidebar'>{nodes}</div>;
	}
}

export default SideBar;
