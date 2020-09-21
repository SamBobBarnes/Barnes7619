import React from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import '../CSS/Main.css';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';

function Header(props) {
	let [fontsLoaded] = useFonts({
		Pacifico_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.header}>
				<TouchableWithoutFeedback onPress={() => console.log('Touched!')}>
					<View style={styles.hamburgerButton}>
						<View style={styles.hamburgerButtonL1}></View>
						<View style={styles.hamburgerButtonL2}></View>
						<View style={styles.hamburgerButtonL3}></View>
						<View style={styles.hamburgerButtonL4}></View>
						<View style={styles.hamburgerButtonL5}></View>
					</View>
				</TouchableWithoutFeedback>
				<View style={styles.headerTextContainer}>
					<Text
						adjustsFontSizeToFit={true}
						numberOfLines={1}
						style={styles.headerText}
					>
						{props.children}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
		fontFamily: 'Pacifico_400Regular',
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
});

export default Header;
