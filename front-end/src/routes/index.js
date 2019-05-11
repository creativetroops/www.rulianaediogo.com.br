import React, { Component, Fragment } from 'react'
import { HashRouter as MainRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

import Settings from '../styles/settings'
import Generic from '../styles/generic'
import Fonts from '../styles/fonts'
import Base from '../styles/base'

import 'antd/dist/antd.css'

class Router extends Component {
  render() {
    return (
      <MainRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <Settings />
          <Generic />
          <Fonts />
          <Base />
        </Fragment>
      </MainRouter>
    )
  }
}

export default Router
