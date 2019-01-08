import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import LoggedItems from './LoggedItems'
import NotLoggedItems from './NotLoggedItems'

const Navbar = (props) => {
  const { auth, profile } = props
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Casamento Ruliana e Diogo
        </Link>
        {auth.uid ? <LoggedItems profile={profile} /> : <NotLoggedItems />}
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
})

export default connect(mapStateToProps)(Navbar)
