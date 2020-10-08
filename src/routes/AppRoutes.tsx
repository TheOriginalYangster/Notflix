import * as React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import LandingPage from '../components/layout/LandingPage/LandingPage'
import MovieDisplay from '../components/layout/MovieDisplay/MovieDisplay'
import SearchPage from '../components/layout/SearchPage/SearchPage'


const AppRoutes = () => {


  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/movieInfo" component={MovieDisplay} />
    </Router>
  )
}

export default AppRoutes