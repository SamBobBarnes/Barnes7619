import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Router, Route, Link } from './react-router';
import './src/CSS/Main.css';

// const Home = () => <Text>Home</Text>;

// const About = () => <Text>About</Text>;

const App = () => (
  <Router>
    {/* <View className="container">
      <View className="nav">
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </View> */}

    <Route
      path={['/http:', '/https:']}
      component={(props) => {
        window.location.replace(props.location.pathname.substr(1)); // substr(1) removes the preceding '/'
        return null;
      }}
    />
    <Route path="/SamuelBarnes/Portfolio">
      <SBPortfolio />
    </Route>
    <Route path="/SamuelBarnes">
      <SamuelBarnes />
    </Route>
    <Route path="/AundreaBarnes">
      <AundreaBarnes />
    </Route>
    <Route path="/">
      <Home sidebar={false} />
    </Route>
  </Router>
);

const Home = () => {
  return <Text>Home</Text>;
  //return <HomePage contents={HomeContents}>Barnes 7-6-2019</HomePage>;
};

const SamuelBarnes = () => {
  return <Text>Samuel Barnes</Text>;
  // return (
  //   <React.Fragment>
  //     <PersonPage contents={SamuelContents}>Samuel Barnes</PersonPage>
  //   </React.Fragment>
  // );
};

const AundreaBarnes = () => {
  return <Text>Aundrea Barnes</Text>;
  // return (
  //   <React.Fragment>
  //     <PersonPage contents={AundreaContents}>Aundrea Barnes</PersonPage>
  //   </React.Fragment>
  // );
};

const SBPortfolio = () => {
  return <Text>Samuel Barnes Portfolio</Text>;
  // return (
  //   <React.Fragment>
  //     <PortfolioPage contents={SamuelPortfolioContents}>
  //       Samuel Barnes Portfolio
  //     </PortfolioPage>
  //   </React.Fragment>
  // );
};

export default App;
