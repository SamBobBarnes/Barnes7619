import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Router, Route, Link } from './react-router';
import './src/CSS/Main.css';

const Home = () => <Text>Home</Text>;

const About = () => <Text>About</Text>;

const App = () => (
  <Router>
    <View className="container">
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
    </View>
  </Router>
);

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 25,
//     padding: 10
//   },
//   nav:{
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
// });

export default App;
