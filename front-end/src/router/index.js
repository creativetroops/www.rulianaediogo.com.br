import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route }  from 'react-router-dom'

import Navbar      from '../components/Navbar'

import CommingSoon from '../pages/CommingSoon'
import Home        from '../pages/Home'
import LogIn       from '../components/Auth/LogIn'
import Dashboard   from '../components/Dashboard'

import Settings    from '../styles/settings'
import Generic     from '../styles/generic'
import Base        from '../styles/base'

class Router extends Component {
	render () {
		return <BrowserRouter>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path="/"    component={CommingSoon} />
						<Route path="/home"      component={Home} />
						<Route path="/login"     component={LogIn} />
						<Route path="/dashboard" component={Dashboard} />
					</Switch>
					<Settings />
					<Generic />
					<Base />
				</Fragment>
			</BrowserRouter>;
	}
}

export default Router