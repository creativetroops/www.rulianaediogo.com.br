import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../../store/actions/authActions'

const LoggedItems = ({ logOut, profile }) => (
    <ul className="right">
      <li>Olá, {profile.firstName}</li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <a onClick={logOut}>Log Out</a>
      </li>
    </ul>
)

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
})

export default connect(
  null,
  mapDispatchToProps,
)(LoggedItems)
