import React, { Component, Fragment } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import LogIn from '../components/Auth/LogIn'
import Dashboard from '../components/Dashboard'

import Settings from '../styles/settings'
import Generic from '../styles/generic'
import Fonts from '../styles/fonts'
import Base from '../styles/base'

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <Settings />
          <Generic />
          <Fonts />
          <Base />
        </Fragment>
      </HashRouter>
    )
  }
}

export default Router
