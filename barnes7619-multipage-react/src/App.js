import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PersonPage from './Components/PersonPage';
import PortfolioPage from './Components/PortfolioPage';
import HomeContents from './PageContents/Home.json';
import SamuelContents from './PageContents/Samuel.json';
import AundreaContents from './PageContents/Aundrea.json';
import SamuelPortfolioContents from './PageContents/SamuelPortfolio.json';

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
      </Switch>
    </Router>
  );
}

function Home() {
  return <HomePage contents={HomeContents}>Barnes 7-6-2019</HomePage>;
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
