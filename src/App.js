import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import pages
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route>
          <Error path='*' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
