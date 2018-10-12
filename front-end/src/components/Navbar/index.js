import React       from 'react'
import { Link }    from 'react-router-dom'
import { connect } from 'react-redux'

import LoggedItems    from './LoggedItems'
import NotLoggedItems from './NotLoggedItems'

const Navbar = (props) => {
	const { auth } = props
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">Casamento Ruliana e Diogo</Link>
				{auth.uid ? <LoggedItems /> : <NotLoggedItems />}
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Navbar)