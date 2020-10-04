import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PersonPage from './Components/PersonPage';
import PortfolioPage from './Components/PortfolioPage';
import HomeContents from './PageContents/Home.json';
import SamuelContents from './PageContents/Samuel.json';
import AundreaContents from './PageContents/Aundrea.json';
import SamuelPortfolioContents from './PageContents/SamuelPortfolio.json';
import MobileDetect from 'mobile-detect';

export default function App() {
  var md = new MobileDetect(window.navigator.userAgent);

  // more typically we would instantiate with 'window.navigator.userAgent'
  // as user-agent; this string literal is only for better understanding

  // console.log('mobile: ', md.mobile()); // 'Sony'
  // console.log('phone: ', md.phone()); // 'Sony'
  // console.log('tablet: ', md.tablet()); // null
  // console.log('userAgent: ', md.userAgent()); // 'Safari'
  // console.log('OS: ', md.os()); // 'AndroidOS'
  // console.log('iphone: ', md.is('iPhone')); // false
  // console.log('bot: ', md.is('bot')); // false
  // console.log('Webkit: ', md.version('Webkit')); // 534.3
  // console.log('Build: ', md.versionStr('Build')); // '4.1.A.0.562'
  // console.log('PS4/xbox: ', md.match('playstation|xbox')); // false
  // console.log('DesktopMode: ', md.is('DesktopMode'));

  return (
    <Router>
      <Switch>
        <Route
          path={['/http:', '/https:']}
          component={(props) => {
            window.location.assign(props.location.pathname.substr(1)); // substr(1) removes the preceding '/'
            return null;
          }}
        />
        <Route path="/SamuelBarnes/Portfolio">
          <SBPortfolio mobile={md} />
        </Route>
        <Route path="/SamuelBarnes">
          <SamuelBarnes mobile={md} />
        </Route>
        <Route path="/AundreaBarnes">
          <AundreaBarnes mobile={md} />
        </Route>
        <Route path="/">
          <Home mobile={md} />
        </Route>
      </Switch>
    </Router>
  );
}

function Home(props) {
  if (props.mobile.mobile() && !props.mobile.tablet()) {
    window.location.replace('http://m.barnes7619.com');
  }
  return <HomePage contents={HomeContents}>Barnes 7-6-2019</HomePage>;
}

function SamuelBarnes(props) {
  if (props.mobile.mobile() && !props.mobile.tablet()) {
    window.location.replace('http://m.barnes7619.com/SamuelBarnes');
  }
  return (
    <React.Fragment>
      <PersonPage contents={SamuelContents}>Samuel Barnes</PersonPage>
    </React.Fragment>
  );
}

function AundreaBarnes(props) {
  if (props.mobile.mobile() && !props.mobile.tablet()) {
    window.location.replace('http://m.barnes7619.com/AundreaBarnes');
  }
  return (
    <React.Fragment>
      <PersonPage contents={AundreaContents}>Aundrea Barnes</PersonPage>
    </React.Fragment>
  );
}

function SBPortfolio(props) {
  if (props.mobile.mobile() && !props.mobile.tablet()) {
    window.location.replace('http://m.barnes7619.com/SamuelBarnes/Portfolio');
  }
  return (
    <React.Fragment>
      <PortfolioPage contents={SamuelPortfolioContents}>
        Samuel Barnes Portfolio
      </PortfolioPage>
    </React.Fragment>
  );
}
