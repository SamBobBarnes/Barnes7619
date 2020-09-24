import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Switch } from 'react-router-dom';
import { Router, Route, Link } from './react-router';
import './src/CSS/Main.css';
import HomePage from './src/Components/HomePage';
import HomeContents from './src/PageContents/Home.json';
import SamuelContents from './src/PageContents/Samuel.json';
import AundreaContents from './src/PageContents/Aundrea.json';
import SamuelPortfolioContents from './src/PageContents/SamuelPortfolio.json';
import PersonPage from './src/Components/PersonPage';
import PortfolioPage from './src/Components/PortfolioPage';

class App extends Component {
	render() {
		return (
			<Router>
				<View style={mainStyles.main}>
					<Switch>
						<Route
							path={['/http:', '/https:']}
							component={(props) => {
								window.location.replace(props.location.pathname.substr(1)); // substr(1) removes the preceding '/'
								return null;
							}}
						/>
						<Route path='/SamuelBarnes/Portfolio' component={SBPortfolio} />
						<Route path='/SamuelBarnes' component={SamuelBarnes} />
						<Route path='/AundreaBarnes' component={AundreaBarnes} />
						<Route path='/' component={Home} />
					</Switch>
				</View>
			</Router>
		);
	}
}

function Home() {
	return <HomePage contents={HomeContents}>Barnes</HomePage>;
}

function SamuelBarnes() {
	return <PersonPage contents={SamuelContents}>Samuel Barnes</PersonPage>;
}

function AundreaBarnes() {
	return <PersonPage contents={AundreaContents}>Aundrea Barnes</PersonPage>;
}

function SBPortfolio() {
	return (
		<PortfolioPage contents={SamuelPortfolioContents}>
			SB Portfolio
		</PortfolioPage>
	);
}

const mainStyles = StyleSheet.create({
	main: {
		backgroundColor: '#18c47f',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});

export default App;
