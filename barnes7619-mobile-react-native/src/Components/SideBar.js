import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import Button from './Button';
import ButtonDownload from './ButtonDownload';

export class SideBar extends Component {
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
		return <View style={this.styles.sideBar}>{nodes}</View>;
	}

	styles = StyleSheet.create({
		sideBar: {
			marginTop: 80,
			backgroundColor: '#1fb0ff',
			position: 'absolute',
			width: '100%',
			borderBottomLeftRadius: 20,
			borderBottomRightRadius: 20,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: 5,

			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,

			elevation: 5,
		},
	});
}

export default SideBar;
