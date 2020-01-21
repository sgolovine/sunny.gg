import React from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'

import Home from 'js/pages/Home'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
