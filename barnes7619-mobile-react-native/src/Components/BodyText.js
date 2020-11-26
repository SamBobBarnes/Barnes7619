import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {
// 	useFonts,
// 	Pacifico_400Regular,
// 	ComicNeue_400Regular,
// 	JosefinSans_400Regular,
// 	BalsamiqSans_400Regular,
// 	Inconsolata_400Regular,
// } from '@expo-google-fonts/dev';

import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { ComicNeue_400Regular } from '@expo-google-fonts/comic-neue';
import { JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import { BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
import { Inconsolata_400Regular } from '@expo-google-fonts/inconsolata';


import { AppLoading } from 'expo';

function BodyText(props) {
	let [fontsLoaded] = useFonts({
		Pacifico_400Regular,
		ComicNeue_400Regular,
		JosefinSans_400Regular,
		BalsamiqSans_400Regular,
		Inconsolata_400Regular,
	});

	var pageStyle = styles.bodyHome;
	if (props.page === 'SB') pageStyle = styles.bodySB;
	else if (props.page === 'AB') pageStyle = styles.bodyAB;
	else if (props.page === 'SBP') pageStyle = styles.bodySBP;

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Text style={pageStyle}>
				<Text>
					<br />
					{props.children}
				</Text>
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	bodyHome: {
		fontFamily: 'ComicNeue_400Regular',
		fontSize: 15,
		fontWeight: 'bold',
		padding: 20,
		backgroundColor: '#18c47f',
	},
	bodySB: {
		fontFamily: 'JosefinSans_400Regular',
		fontSize: 20,
		padding: 20,
		backgroundColor: '#18c47f',
	},
	bodyAB: {
		fontFamily: 'BalsamiqSans_400Regular',
		fontSize: 20,
		fontWeight: 'bold',
		padding: 20,
		backgroundColor: '#18c47f',
	},
	bodySBP: {
		fontFamily: 'Inconsolata_400Regular',
		fontSize: 20,
		fontWeight: 'bold',
		padding: 20,
		backgroundColor: '#18c47f',
	},
});

export default BodyText;
