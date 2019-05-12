import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Blog, Projects, Skills, Splash} from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/blog" component={Blog} />
  </Switch>
)

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes)
