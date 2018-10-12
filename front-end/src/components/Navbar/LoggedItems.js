import React from 'react'
import { connect } from 'react-redux'
import { logOut }  from '../../store/actions/authActions'
import { NavLink } from 'react-router-dom'

const LoggedItems = (props) => {
	return (
		<ul className="right">
			<li><NavLink to="/dashboard">Dashboard</NavLink></li>
			<li><a onClick={props.logOut}>Log Out</a></li>
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