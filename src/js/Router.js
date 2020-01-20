import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from 'js/pages/Home'
import Resume from 'js/pages/Resume'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </BrowserRouter>
  )
}
