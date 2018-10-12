import React, { Component, Fragment } from 'react'
import { HashRouter, Switch, Route }  from 'react-router-dom'

import Navbar      from '../components/Navbar'

import CommingSoon from '../pages/CommingSoon'
import Home        from '../pages/Home'
import LogIn       from '../components/Auth/LogIn'
import Dashboard   from '../components/Dashboard'

class Router extends Component {
	render () {
		return <HashRouter>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path="/"    component={CommingSoon} />
						<Route path="/home"      component={Home} />
						<Route path="/login"     component={LogIn} />
						<Route path="/dashboard" component={Dashboard} />
					</Switch>
				</Fragment>
			</HashRouter>;
	}
}

export default Router