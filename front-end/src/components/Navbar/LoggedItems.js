import React       from 'react'
import { connect } from 'react-redux'
import { logOut }  from '../../store/actions/authActions'
import { NavLink } from 'react-router-dom'

const LoggedItems = ({logOut, profile}) => {
	return (
		<ul className="right">
			<li>Olá, {profile.firstName}</li>
			<li><NavLink to="/dashboard">Dashboard</NavLink></li>
			<li><a onClick={logOut}>Log Out</a></li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => dispatch(logOut())
	}
}

export default connect(
	null,
	mapDispatchToProps
)(LoggedItems)