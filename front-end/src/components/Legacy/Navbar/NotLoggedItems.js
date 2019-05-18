import React from 'react'
import { NavLink } from 'react-router-dom'

const NotLoggedItems = () => (
    <ul className="right">
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
)

export default NotLoggedItems
