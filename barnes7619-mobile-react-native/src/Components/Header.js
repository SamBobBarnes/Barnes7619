import React, { Component } from 'react';
import { Text, View } from 'react-native';
import '../CSS/Main.css';

export class Header extends Component {
	render() {
		return (
			<View style={this.styles.header}>
				<View style={this.styles.hamburgerButton}>
					<View style={this.styles.hamburgerButtonL1}></View>
					<View style={this.styles.hamburgerButtonL2}></View>
					<View style={this.styles.hamburgerButtonL3}></View>
					<View style={this.styles.hamburgerButtonL4}></View>
					<View style={this.styles.hamburgerButtonL5}></View>
				</View>
				<View style={this.styles.headerTextContainer}>
					<Text
						adjustsFontSizeToFit={true}
						numberOfLines={1}
						style={this.styles.headerText}
					>
						{this.props.children}
					</Text>
				</View>
			</View>
		);
	}

	styles = {
		header: {
			backgroundColor: '#ff6600',
			width: '100%',
			height: 80,
			flexDirection: 'row',
		},
		headerTextContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: 10,
			marginRight: 10,
			flex: 1,
		},
		headerText: {
			textAlignVertical: 'center',
			textAlign: 'center',
			fontSize: 40,
			fontFamily: 'Pacifico',
		},
		hamburgerButton: {
			width: 40,
			height: 40,
			marginLeft: 10,
			marginTop: 20,
			flexDirection: 'column',
		},
		hamburgerButtonL1: {
			flex: 2,
			backgroundColor: 'black',
			borderRadius: 5,
		},
		hamburgerButtonL2: {
			flex: 1,
		},
		hamburgerButtonL3: {
			flex: 2,
			backgroundColor: 'black',
			borderRadius: 5,
		},
		hamburgerButtonL4: {
			flex: 1,
		},
		hamburgerButtonL5: {
			flex: 2,
			backgroundColor: 'black',
			borderRadius: 5,
		},
	};
}

export default Header;
