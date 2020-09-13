import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PersonPage from './Components/PersonPage';
import PortfolioPage from './Components/PortfolioPage';
import HomeContents from './PageContents/Home.json';
import SamuelContents from './PageContents/Samuel.json';
import AundreaContents from './PageContents/Aundrea.json';
import SamuelPortfolioContents from './PageContents/SamuelPortfolio.json';
import MediaQuery from 'react-responsive';
import HomePageM from './Components/HomePageM';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route
					path={['/http:', '/https:']}
					component={(props) => {
						window.location.replace(props.location.pathname.substr(1)); // substr(1) removes the preceding '/'
						return null;
					}}
				/>
				<Route path='/SamuelBarnes/Portfolio'>
					<SBPortfolio />
				</Route>
				<Route path='/SamuelBarnes'>
					<SamuelBarnes />
				</Route>
				<Route path='/AundreaBarnes'>
					<AundreaBarnes />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
		// <div>
		// 	<div>Device Test!</div>

		// <MediaQuery minDeviceWidth={1224}>
		// 	<div>You are a desktop or laptop</div>
		// </MediaQuery>
		// <MediaQuery maxDeviceWidth={1224}>
		// 	<div>You are a tablet or mobile phone</div>
		// </MediaQuery>

		// 	<MediaQuery orientation='portrait'>
		// 		<div>You are portrait</div>
		// 	</MediaQuery>
		// 	<MediaQuery orientation='landscape'>
		// 		<div>You are landscape</div>
		// 	</MediaQuery>

		// 	<MediaQuery minResolution='2dppx'>
		// 		<div>You are retina</div>
		// 	</MediaQuery>
		// </div>
	);
}

function Home() {
	return (
		<React.Fragment>
			<MediaQuery minDeviceWidth={1224}>
				<HomePage contents={HomeContents}>Barnes 7-6-2019</HomePage>
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1224}>
				<HomePageM contents={HomeContents}>Barnes 7-6-2019</HomePageM>
			</MediaQuery>
		</React.Fragment>
	);
}

function SamuelBarnes() {
	return (
		<React.Fragment>
			<PersonPage contents={SamuelContents}>Samuel Barnes</PersonPage>
		</React.Fragment>
	);
}

function AundreaBarnes() {
	return (
		<React.Fragment>
			<PersonPage contents={AundreaContents}>Aundrea Barnes</PersonPage>
		</React.Fragment>
	);
}

function SBPortfolio() {
	return (
		<React.Fragment>
			<PortfolioPage contents={SamuelPortfolioContents}>
				Samuel Barnes Portfolio
			</PortfolioPage>
		</React.Fragment>
	);
}
