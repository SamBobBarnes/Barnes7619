import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import '../CSS/Main.css';
import HamburgerButton from './HamburgerButton';
import HeaderText from './HeaderText';

function Header(props) {
	return (
		<View style={styles.header}>
			<TouchableOpacity onPress={props.touched}>
				<View>
					<HamburgerButton />
				</View>
			</TouchableOpacity>
			<HeaderText>{props.children}</HeaderText>
		</View>
	);
}

function Touched() {
	alert('Touched!');
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#ff6600',
		width: '100%',
		height: 80,
		flexDirection: 'row',
		zIndex: 2,
		position: 'absolute',
	},
});

export default Header;
