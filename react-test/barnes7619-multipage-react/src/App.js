import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './Components/SideBar'
import HomePage from './Components/HomePage'
import SamuelPage from './Components/SamuelPage'
import AundreaPage from './Components/AundreaPage'
import SamuelPortfolioPage from './Components/SamuelPortfolioPage'
import HomeContents from './PageContents/Home.json'
import SamuelContents from './PageContents/Samuel.json'
import AundreaContents from './PageContents/Aundrea.json'
import SamuelPortfolioContents from './PageContents/SamuelPortfolio.json'

export default function App() {
    return (
      <Router>
        <Switch>
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
            <Home />
          </Route>
        </Switch>
      </Router>
    )
}

function Home() {
  return (
    <React.Fragment>
      <HomePage contents={HomeContents}>Barnes 7-6-2019</HomePage>
    </React.Fragment>
  )
}

function SamuelBarnes() {
  return (
    <React.Fragment>
      <SamuelPage contents={SamuelContents}>Samuel Barnes</SamuelPage>
    </React.Fragment>
  )
}

function AundreaBarnes() {
  return (
    <React.Fragment>
      <AundreaPage contents={AundreaContents}>Aundrea Barnes</AundreaPage>
    </React.Fragment>
  )
}

function SBPortfolio() {
  return (
    <React.Fragment>
      <SamuelPortfolioPage contents={SamuelPortfolioContents}>Samuel Barnes Portfolio</SamuelPortfolioPage>
    </React.Fragment>
  )
}