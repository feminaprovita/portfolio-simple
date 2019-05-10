import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {About, Projects, Skills, Splash} from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/skills" component={Skills} />
  </Switch>
)

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes)
