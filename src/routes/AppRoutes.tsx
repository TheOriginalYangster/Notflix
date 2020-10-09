import * as React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import LandingPage from '../components/layout/LandingPage/LandingPage'
import MovieDisplay from '../components/layout/MovieDisplay/MovieDisplay'
import SearchPage from '../components/layout/SearchPage/SearchPage'


const AppRoutes = () => {

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/movieInfo" component={MovieDisplay} />
    </Switch>
  )
}

export default AppRoutes