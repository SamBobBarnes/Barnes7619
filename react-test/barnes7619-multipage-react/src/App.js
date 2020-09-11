import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import HomeContents from './PageContents/Home.json'


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
  const links = [
    {
      id: 2,
      href: '/SamuelBarnes',
      text: 'Samuel Barnes'
    },
    {
      id: 4,
      href: '/AundreaBarnes',
      text: 'Aundrea Barnes'
    }
  ]

  return (
    <React.Fragment>
      <HomePage linkList={links} contents={HomeContents}>Barnes 7-6-2019</HomePage>
    </React.Fragment>
  )
}

function SamuelBarnes() {
  const links = [
    {
      id: 1,
      href: '/',
      text: 'Home'
    },
    {
      id: 2,
      href: '/SamuelBarnes',
      text: 'Samuel Barnes'
    },
    {
      id: 3,
      href: '/SamuelBarnes/Portfolio',
      text: 'SB Portfolio'
    },
    {
      id: 4,
      href: '/AundreaBarnes',
      text: 'Aundrea Barnes'
    }
  ]

  return (
    <React.Fragment>
      <SideBar linkList={links} />
    </React.Fragment>
  )
}

function AundreaBarnes() {
  const links = [
    {
      id: 1,
      href: '/',
      text: 'Home'
    },
    {
      id: 2,
      href: '/SamuelBarnes',
      text: 'Samuel Barnes'
    },
    {
      id: 4,
      href: '/AundreaBarnes',
      text: 'Aundrea Barnes'
    }
  ]

  return (
    <React.Fragment>
      <SideBar linkList={links} />
    </React.Fragment>
  )
}

function SBPortfolio() {
  const links = [
    {
      id: 1,
      href: '/',
      text: 'Home'
    },
    {
      id: 2,
      href: '/SamuelBarnes',
      text: 'Samuel Barnes'
    },
    {
      id: 3,
      href: '/SamuelBarnes/Portfolio',
      text: 'SB Portfolio'
    },
    {
      id: 4,
      href: '/AundreaBarnes',
      text: 'Aundrea Barnes'
    }
  ]

  return (
    <React.Fragment>
      <SideBar linkList={links} />
    </React.Fragment>
  )
}




// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//             <li>
//               <Link to="/SamuelBarnes">Sam</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         
//       </div>
//     </Router>
    
//   );
// }

