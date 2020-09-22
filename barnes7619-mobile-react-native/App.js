import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Switch } from 'react-router-dom';
import { Router, Route, Link } from './react-router';
import './src/CSS/Main.css';
import HomePage from './src/Components/HomePage';
import HomeContents from './src/PageContents/Home.json';
import SamuelContents from './src/PageContents/Samuel.json';
import AundreaContents from './src/PageContents/Aundrea.json';
import PersonPage from './src/Components/PersonPage';

// functionHome = () => <Text>Home</Text>;

// functionAbout = () => <Text>About</Text>;

class App extends Component {
  render() {
    return (
      <Router>
        <View>
          <Switch>
            <Route
              path={['/http:', '/https:']}
              component={(props) => {
                window.location.replace(props.location.pathname.substr(1)); // substr(1) removes the preceding '/'
                return null;
              }}
            />
            <Route path="/SamuelBarnes/Portfolio" component={SBPortfolio} />
            <Route path="/SamuelBarnes" component={SamuelBarnes} />
            <Route path="/AundreaBarnes" component={AundreaBarnes} />
            <Route path="/" component={Home} />
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
  return <Text>Samuel Barnes Portfolio</Text>;
  // return (
  //   <React.Fragment>
  //     <PortfolioPage contents={SamuelPortfolioContents}>
  //       Samuel Barnes Portfolio
  //     </PortfolioPage>
  //   </React.Fragment>
  // );
}

export default App;
